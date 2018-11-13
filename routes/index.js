var express = require('express');
var router = express.Router();

//test
var query = require('../blockchain/query');//require

//test

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });

});
router.post('/clicke', (req, res) => {
  const click = {clickTime: new Date()};
  //console.log(click);
  //console.log("intercepted");
  console.log(query);
  var bunchOfCarData = query.queryCar();
  console.log('between1');
  console.log(bunchOfCarData);
  console.log(query.queryCar());
  console.log('between2');
  res.render('index', { title: 'Express', carData: bunchOfCarData});
});

//query.functionName();


module.exports = router;
