const router = require('express').Router();
const AuthorController = require('../controller/author');
const ErrorMiddleware =require('../middlewares/validation');

//Bütün yazarlar
router.get('/', AuthorController.showAuthors);
router.get('/new', AuthorController.newAuthorForm);
router.get('/:id', AuthorController.singleAuthor);
router.get('/:id/edit', AuthorController.editAuthorForm);
router.post('/',ErrorMiddleware.authorError(), AuthorController.addAuthor);
router.put('/:id', ErrorMiddleware.authorError(), AuthorController.updateAuthor);
router.delete('/:id',AuthorController.deleteAuthor);


module.exports = router;