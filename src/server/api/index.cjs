const router = require('express').Router();

router.use('/users', require('./users.cjs'))
router.use('/destinations', require('./destinations.cjs'));

module.exports = router;

