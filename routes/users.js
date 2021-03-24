var express = require('express');
var router = express.Router();

// /* GET users listing. */
router.get('/create', function (req, res, next) {
  res.render('users/create', { title: 'Express users' });
});

// create users
router.post('/create', function (req, res, next) {
  var vm = {
    title: 'Create an account'
  };
  res.render('users/create', vm);
});

// error handler middleware
router.use((req, res, next) => {
  const error = new Error("Page not found");
  error.status = 404;
  res.render('error', {error : error});
});

module.exports = router;
