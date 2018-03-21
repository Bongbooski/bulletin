var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var client = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'bulletin'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  client.query("SELECT * FROM post",function(error, results){
    res.render('index', {
      title: '전체보기',
      data: results
    });
  });
});

/* category1 list page */
router.get('/cat1', function(req, res, next) {
  client.query("SELECT * FROM post WHERE category = 1",function(error, results){
    res.render('cat1', {
      title: 'cat1',
      data: results
    });
  });
});

/* category2 list page */
router.get('/cat2', function(req, res, next) {
  client.query("SELECT * FROM post WHERE category = 2",function(error, results){
    res.render('cat2', {
      title: 'cat2',
      data: results
    });
  });
});

/* category1 post writing page */
router.get('/cat1/write', function(req, res, next){
  res.render('write1', {
    title: 'cat1 writing'
  });
});

/* category2 post writing page */
router.get('/cat2/write', function(req, res, next){
  res.render('write2', {
    title: 'cat2 writing'
  });
});

/* category1 post reading page */
router.get('/cat1/:id', function(req, res, next){
  const id = req.params.id;
  res.render('post', {
    category: 1,
    title: id+'번째 게시물'
  });
});

/* category2 post reading page */
router.get('/cat2/:id', function(req, res, next){
  const id = req.params.id;
  res.render('post', {
    category: 2,
    title: id+'번째 게시물'
  });
});

module.exports = router;
