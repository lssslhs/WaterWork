var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/game',function(req,res){
	res.render('buildingGame',{title:'Game'});
});

router.get('/admintest',function(req,res){
	res.render('admintest',{title:'adt'});
});

module.exports = router;
