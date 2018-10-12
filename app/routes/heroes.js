const router = require('express').Router();
const controller = require('app/controllers/heroes');

router.get('/', controller.get);
router.post('/', controller.post);
router.delete('/:_id', controller.destroy);

module.exports = router;