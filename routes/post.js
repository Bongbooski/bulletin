var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var client = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'bulletin'
});

/* New post for cat1 */
router.post('/cat1/new', function(req, res, next) {
  var body = req.body;

  console.log("경로진입성공");
  console.log("제목: " + body.title);
  console.log("작성자: " + body.author);
  console.log("내용: " + body.content);

  client.query("INSERT INTO post (category, author, title, content) VALUES(?,?,?,?)",[1, body.author, body.title, body.content, Date.now()],function(err, result){
    if(err){
      console.log("에러: " + err);
      res.end('{"success" : "Inserting failed", "status" : 400}');
    }else{
      res.end('{"success" : "Updated Successfully", "status" : 200}');
    }
  });
});

/* New post for cat2 */
router.post('/cat2/new', function(req, res, next) {
  var body = req.body;

  console.log("경로진입성공");
  console.log("제목: " + body.title);
  console.log("작성자: " + body.author);
  console.log("내용: " + body.content);

  client.query("INSERT INTO post (category, author, title, content) VALUES(?,?,?,?)",[2, body.author, body.title, body.content, Date.now()],function(err, result){
    if(err){
      console.log("에러: " + err);
      res.end('{"success" : "Inserting failed", "status" : 400}');
    }else{
      res.end('{"success" : "Updated Successfully", "status" : 200}');
    }
  });
});

router.get("/:id",function(req,res,next){
  const id = req.params.id;
  console.log("id: " + id);
  client.query("SELECT * FROM post WHERE id = ?",id,function(err, result){
    res.render('detail', {
      title: result.title,
      data: result
    });
  });
});



module.exports = router;
