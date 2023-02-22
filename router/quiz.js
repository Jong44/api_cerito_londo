const quizController = require('../controller/quiz');
const router = require('express').Router();

router.post('/', quizController.create);
router.get('/', quizController.getAll);
router.get('/:id', quizController.getById);
router.put('/:id', quizController.update);
router.delete('/:id', quizController.delete);

module.exports = router;