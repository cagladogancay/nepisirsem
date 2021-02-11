const Author = require('../models/author');
const Recipe = require('../models/recipe');
const cities = require('../models/city');
//image kaydetmek için
const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
//hata mesajı için
const { validationResult } = require('express-validator');
//eklenen yazarları gösterme
const showAuthors = async (req, res) => {
    try {
        const allAuthors = await Author.find();
        res.render('authors/index', { authors: allAuthors });
    } catch (error) {
        console.error('Yazarlar gösterilemedi', error);
    }
}
//Yeni yazar form gösterme
const newAuthorForm = async (req, res) => {
    res.locals.validation_error = req.flash("validation_error");
    res.render('authors/new', { cities });
}
//Yeni yazar ekleme
const addAuthor = async (req, res) => {
    showError(req, res, '/authors/new');
    const author = new Author({
        //html için
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        city: req.body.cities
    });
    saveCover(author, req.body.cover);
    try {

        /* const  newAuthor=await author.save(); */
        await author.save();
        console.log('Yeni yazar kaydedildi');
        res.redirect('/authors');
    } catch (error) {
        console.log('Yeni yazar eklenemedi', error);
    }

}
//show edit author form
const editAuthorForm = async (req, res) => {
    res.locals.validation_error = req.flash("validation_error");
    try {
        const author = await Author.findById(req.params.id);
        res.render('authors/edit', { author, cities });
    } catch (error) {
        console.error('Edit form gösterilemedi', error);
    }

}

//update author
const updateAuthor = async (req, res) => {
    let author;
    try {
        author = await Author.findById(req.params.id);
        showError(req, res, `/authors/${author.id}/edit`);
        author.firstname = req.body.firstname,
            author.lastname = req.body.lastname,
            author.username = req.body.username,
            author.email = req.body.email,
            author.city = req.body.cities
        if (req.body.cover != null && req.body.cover !== '') {
            saveCover(author, req.body.cover);
        }
        await author.save();
        res.redirect(`/authors/${author.id}`);
    } catch (error) {
        if (author == null) {
            res.redirect('/');
        } else {
            res.render('authors/edit', {
                author,
                errorMessage: 'Güncelleme yapılamadı'
            });
        }
    }
}

//tek yazar görüntüleme
const singleAuthor = async (req, res) => {
    try {

        const author = await Author.findById(req.params.id);
        const recipes = await Recipe.find({ author: author.id }).exec();

        res.render('authors/show', { author, recipes });
    } catch (error) {
        console.error('id bulunamadı', error);
    }
}

//silme
const deleteAuthor = async (req, res) => {
    let author;
    try {
        author = await Author.findById(req.params.id);
        await author.remove();
        res.redirect('/authors');
    } catch (error) {
        if (author == null) {
            res.redirect('/');
        } else {
            res.redirect(`/authors/${author.id}`);
        }
    }
}

function saveCover(author, coverEncoded) {
    if (coverEncoded == null) return
    const cover = JSON.parse(coverEncoded)
    if (cover != null && imageMimeTypes.includes(cover.type)) {
        author.coverImage = new Buffer.from(cover.data, 'base64')
        author.coverImageType = cover.type
    }
}

function showError(req, res, redirect) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.locals.firstname = req.flash('firstname');
        res.locals.lastname = req.flash('lastname');
        res.locals.username = req.flash('username');
        res.locals.email = req.flash('email');
        req.flash('validation_error', errors.array());
        res.redirect(redirect);
    }
}
module.exports = { showAuthors, newAuthorForm, addAuthor, singleAuthor, editAuthorForm, updateAuthor, deleteAuthor }