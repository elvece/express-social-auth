var express = require('express');
var router = express.Router();
var passport = require('../auth/github.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Social Auth' });
});

router.get('/auth/github',
  passport.authenticate('github'));

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;
