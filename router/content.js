const contentController = require('../controller/content');
const router = require('express').Router();

router.post('/', contentController.create);
router.get('/', contentController.getAll);
router.get('/:id', contentController.getById);
router.put('/:id', contentController.update);
router.put('/:id', contentController.update);

module.exports = router;