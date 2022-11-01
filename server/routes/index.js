const router = require('express').Router();

router.use('/items', require('./items'));

// Handle 404:
router.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
