var express = require('express');
var router = express.Router();


var query = require('../blockchain/query');//require
var invoke = require('../blockchain/invoke');


/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Demo' });
  
});

router.get('/queryAll', (req, res) => {
  
  async function f1(req, res) {
  var productsData = await query.query('queryAllProducts');
  res.writeHead(200,"OK",{"Content-Type":"text/html"});
  res.end(productsData);
  }

  f1(req ,res);
  
});

router.post('/searchProduct', (req, res) => {//receives an object [0 : "<reference>"]
  
  async function f1(req, res) {
  var productData = await query.query('queryProductByKey',req.body[0]);
  res.writeHead(200,"OK",{"Content-Type":"text/html"});
  res.end(productData);
  }

  f1(req ,res);
  
});

router.post('/history', (req, res) => {//receives an object [0 : "<reference>"]
  
  async function f1(req, res) {
  var productData = await query.query('getHistoryForProduct',req.body[0]);
  res.writeHead(200,"OK",{"Content-Type":"text/html"});
  res.end(productData);
  }

  f1(req ,res);
  
});

router.post('/addProduct', (req, res) => {//[0:"<ref>",1:"<type>",2:"<brand>",3:"<model>",4:"<vol/lumens>",5:"<watts/ann.consumpt>"]
  async function f1(req, res) {

  var response = await invoke.invoke('createProduct', req.body);
  res.writeHead(200,"OK",{"Content-Type":"text/html"});
  res.end(response);
  
  }

  f1(req ,res);
  
});

router.post('/modifyProduct', (req, res) => {//[0:"<ref>",1:"<brand>",2:"<model>",3:"<vol/lumens>",4:"<watts/ann.consumpt>"]
  async function f1(req, res) {

  var response = await invoke.invoke('modifyProduct', req.body);
  res.writeHead(200,"OK",{"Content-Type":"text/html"});
  res.end(response);
  
  }

  f1(req ,res);
  
});

router.post('/changeStatus', (req, res) => {//[0:"<ref>",1:"<accepted/rejected/pending>",2:"<market>"]
  async function f1(req, res) {
  var response = await invoke.invoke('changeProductStatus', req.body);
  res.writeHead(200,"OK",{"Content-Type":"text/html"});
  res.end(response);
  
  }

  f1(req ,res);
  
});

module.exports = router;