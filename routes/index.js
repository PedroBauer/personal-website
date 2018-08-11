var express = require('express');
var router = express.Router();

/* GET home page. */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', {page:'Portfolio', menuId:'portfolio'});
});

router.get('/resume', function(req, res, next) {
  res.render('resume', {page:'Resume', menuId:'resume'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About', menuId:'about'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact', menuId:'contact'});
});
module.exports = router;
