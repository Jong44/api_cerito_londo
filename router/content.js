const contentController = require('../controller/content');
const router = require('express').Router();

router.post('/', contentController.create);
router.get('/', contentController.getAll);
router.get('/search', contentController.searchContent);
router.get('/:id', contentController.getById);
router.put('/:id', contentController.update);
router.delete('/:id', contentController.delete);

module.exports = router;