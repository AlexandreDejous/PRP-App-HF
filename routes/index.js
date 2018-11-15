var express = require('express');
var router = express.Router();

//test
var query = require('../blockchain/query');//require

//test

/* GET home page. */
router.get('/', function(req, res, next) {
  
  //res.render('index', { title: 'Express' });
  res.render('index', { title: 'MAAAAA' });
  async function f1(res) {
  var bunchOfCarData = await query.queryCar();
  res.render('index', { title: 'MU', carData: bunchOfCarData});
  //console.log('RESULTS ARE ' + bunchOfCarData);
  }

  f1(res);
});
router.post('/clicke', (req, res) => {
  const click = {clickTime: new Date()};
  //console.log(click);
  //console.log("intercepted");
  //console.log(query);
  

  //f1(res);
  //res.render('index', { title: 'MU'});
  //var bunchOfCarData = query.queryCar();
  //console.log('between1');
  //console.log(bunchOfCarData);
  /*console.log(query.queryCar(function(data){
  	console.log("salut");
  	var renderPath = '../views/index';
  	res.render('index', { title: 'huhu', carData: data});

  }));*/
  //console.log('between2');
  //res.render('index', { title: 'Express', carData: bunchOfCarData});

  /*query.queryCar(function(data){
  	console.log("salut");
  	var renderPath = '../views/index';
  	res.render(renderPath, { title: 'Express', carData: data});

  })*/
});


//query.functionName();


module.exports = router;
