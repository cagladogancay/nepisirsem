const { body } = require('express-validator');

const recipeError = () => {
    return [
        body('title').trim().isString().notEmpty().withMessage('Başlık giriniz'),
        body('category').trim().isString().notEmpty().withMessage('Kategori boş olamaz'),
        body('ingredients').trim().isString().notEmpty().withMessage('Malzemeleri Giriniz'),
        body('instructions').trim().isString().notEmpty().withMessage('Yapılış boş olamaz'),

    ];
}

const authorError = () => {
    return [
        body('firstname').trim().isString().isLength({ min: 2, max: 30 }).withMessage('minumum 2 maksimum 30 karakter girilmeli').notEmpty().withMessage('Ad alanını doldurunuz'),
        body('lastname').trim().isString().isLength({ min: 2, max: 30 }).withMessage('minumum 2 maksimum 30 karakter girilmeli').notEmpty().withMessage('Soyadı alanını doldurunuz'),
        body('username').trim().isString().isLength({ min: 2, max: 30 }).withMessage('minumum 2 maksimum 30 karakter girilmeli').notEmpty().withMessage('Kullanıcı adı alanını doldurunuz'),
        body('email').trim().isString().notEmpty().withMessage('Email alanını doldurunuz'),
    ]
}

module.exports = { recipeError, authorError };