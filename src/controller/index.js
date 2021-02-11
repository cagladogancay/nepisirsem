const Author = require('../models/author');
const Recipe = require('../models/recipe');
//image kaydetmek için
const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];
//validation için
const { validationResult } = require('express-validator');
const showRecipe = async (req, res, next) => {
    try {
        const authors = new Author();
        const allRecipe = await Recipe.find().populate('author');

        res.render('index', { recipes: allRecipe, authors });
    } catch (error) {
        console.log('Tarifler Gösterilemedi', error);
    }

}
//Yeni tarif form gosterme
const newRecipeForm = async (req, res) => {
    const recipe = new Recipe();
    const authors = await Author.find();
    res.locals.validation_error = req.flash("validation_error");
    res.render('recipes/new', { recipe, authors });
}
//Tarif kaydetme 
const addRecipe = async (req, res, next) => {
    showError(req, res, '/new');
    const recipe = new Recipe({
        title: req.body.title,
        category: req.body.category,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        author: req.body.author


    });
    saveCover(recipe, req.body.cover);
    try {


        await recipe.save();
        res.redirect('/');
    } catch (error) {

        // res.render('recipes/new',{hatalar});
        console.error('Yeni tarif eklenemedi', error);

    }
}
//tek sayfa gösterme
const singleRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id).populate('author');
        res.render('recipes/show', { recipe });
    } catch (error) {
        console.error('id yanlış', error);
    }

}

const editRecipeForm = async (req, res) => {
    res.locals.validation_error = req.flash("validation_error");


    try {
        const recipe = await Recipe.findById(req.params.id);
        const authors = await Author.find();
        res.render('recipes/edit', { recipe, authors });
    } catch (error) {
        console.error('Recipe düzenleme sayfası bulunamadı', error);
    }
}
const updateRecipe = async (req, res) => {
    let recipe;
    try {
        recipe = await Recipe.findById(req.params.id);
        showError(req, res, `/recipe/${recipe.id}/edit`);
        recipe.title = req.body.title,
            recipe.category = req.body.category,
            recipe.description = req.body.description,
            recipe.ingredients = req.body.ingredients,
            recipe.instructions = req.body.instructions,
            recipe.author = req.body.author
        if (req.body.cover != null && req.body.cover !== '') {
            saveCover(recipe, req.body.cover);
        }
        await recipe.save();
        res.redirect(`/recipe/${recipe.id}`);
    } catch (error) {
        if (recipe == null) {
            res.redirect('/');
        } else {
            res.render('recipes/edit', {
                recipe,
                errorMessage: 'Güncelleme yapılamadı'
            });
        }
    }
}

const deleteRecipe = async (req, res) => {
    let recipe;
    try {
        recipe = await Recipe.findById(req.params.id);
        await recipe.remove();
        res.redirect('/');
    } catch (error) {
        /*  if (recipe != null) {
             res.redirect('/');
         } else {
             res.redirect(`/recipes/${recipe.id}`);
         } */
        if (recipe != null) {
            res.render('recipes/show', {
                recipe,
                errorMessage: 'Tarif silinemedi'
            });

        } else {
            res.redirect('/');
        }
    }
}
function saveCover(recipe, coverEncoded) {
    if (coverEncoded == null) return
    const cover = JSON.parse(coverEncoded);
    if (cover != null && imageMimeTypes.includes(cover.type)) {
        recipe.coverImage = new Buffer.from(cover.data, 'base64');
        recipe.coverImageType = cover.type;
    }
}
function showError(req, res, redirect) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        /*   console.log(errorMessages.array()); */
        res.locals.title = req.flash("title");
        res.locals.category = req.flash("category");
        res.locals.ingredients = req.flash("ingredients");
        res.locals.instructions = req.flash("instructions");
        req.flash('validation_error', errors.array())
        res.redirect(redirect);
    }
}


module.exports = {
    showRecipe,
    newRecipeForm,
    addRecipe,
    singleRecipe,
    editRecipeForm,
    updateRecipe,
    deleteRecipe
}