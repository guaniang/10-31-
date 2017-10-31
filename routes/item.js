var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createPool({
  host:"localhost",
  user:"root",//administrator
  password:"123456",
  database:'user'
})
/* GET home page. */
router.get('/list', function(req, res, next) {
connection.query("SELECT * FROM user_table",function(err,rows,fields){
    res.header('Access-Control-Allow-Origin',"*")
    res.send(rows)
})
});
//router.post('/detail', function(req, res, next){
//var abc=req.body.abc
//connection.query('SELECT * FROM user_table WHERE id='+abc,function(err,rows,feilds){
//  res.header("Access-Control-Allow-Origin","*")
//  res.send(rows)
//  console.log(rows)
//})
//});


router.post('/zhen', function(req, res, next){
  var id=req.body.id;
  console.log(id)
  connection.query('INSERT INTO user_table (userName)VALUES("'+id+'") ',function(err,rows,feilds){
    res.header("Access-Control-Allow-Origin","*")
    res.send(rows)
  })
});


router.post('/del', function(req, res, next){
var cc=req.body.id
console.log(cc)
connection.query('DELETE FROM user_table WHERE id='+cc,function(err,rows,feilds){
    res.header("Access-Control-Allow-Origin","*")
    res.send(rows)
})

});

module.exports = router;
