const router = require('express').Router();

router.get('/', (req,res) => res.send("Liga do CaquiCoders"));
router.use('/heroes', require('./heroes'));

module.exports = router;