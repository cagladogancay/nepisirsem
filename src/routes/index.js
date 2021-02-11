const express = require('express');
const router = express.Router();
const IndexController = require('../controller/index');
const ErrorMiddleware = require('../middlewares/validation');

/* GET home page. */
router.get('/', IndexController.showRecipe); //index sayfası
router.get('/new', IndexController.newRecipeForm); // /new şeklinde geliyor 
router.get('/recipe/:id', IndexController.singleRecipe);//tek recipe görüntüleme
router.get('/recipe/:id/edit', IndexController.editRecipeForm); // Edit formu getirme
router.post('/', ErrorMiddleware.recipeError(), IndexController.addRecipe); //
router.put('/recipe/:id', ErrorMiddleware.recipeError(), IndexController.updateRecipe);
router.delete('/recipe/:id', IndexController.deleteRecipe);
module.exports = router;
