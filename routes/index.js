var express = require('express');
var router = express.Router();

//test
var query = require('../blockchain/query');
//test

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });

});
router.post('/clicke', (req, res) => {
  const click = {clickTime: new Date()};
  console.log(click);
  console.log("intercepted");
});

//query.functionName();


module.exports = router;
