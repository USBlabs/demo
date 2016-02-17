var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Link = mongoose.model('Link');

router.get('/links', function(req, res, next) {
  Link.find(function(err, links){
    if(err){ return next(err); }

    res.json(links);
  });
});

router.post('/links', function(req, res, next) {
  var link = new Link(req.body);

  link.save(function(err, post){
    if(err){ return next(err); }

    res.json(link);
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
