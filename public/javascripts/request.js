console.log('Client-side code running');

//method = "POST" , "GET", etc
//adress = "/clicke" , "/clicked", etc
//ID = "HTML_ID"
function XHR1(address, ID){
  var req = new XMLHttpRequest();
  req.open("GET",address);
  req.onreadystatechange = function(){
      if(req.readyState == 4){
          document.getElementById(ID).innerHTML = req.responseText;
      }
  }
  req.send();
}

function XHRPOST(address, ID, Data){
  console.log(Data);
  var req = new XMLHttpRequest();
  req.open("POST", address, true);
  req.setRequestHeader("Content-type", "application/json");
  req.onreadystatechange = function(){
      if(req.readyState == 4){
          document.getElementById(ID).innerHTML = req.responseText;
      }
  }
  req.send(JSON.stringify(Data));
}

$( "#addProductForm" ).submit(function( event ) {
  var Form = $( "#addProductForm" ).serializeArray();
  var Obj = {0:Form[0].value,1:Form[1].value,2:Form[2].value,3:Form[3].value,4:Form[4].value,5:Form[5].value};
  // array of string values of the form 
  XHRPOST("/addProduct","add_area", Obj);
  event.preventDefault();
});

$( "#modifyProductForm" ).submit(function( event ) {
  var Form = $( "#modifyProductForm" ).serializeArray();
  var Obj = {0:Form[0].value,1:Form[1].value,2:Form[2].value,3:Form[3].value,4:Form[4].value};
  // array of string values of the form 
  XHRPOST("/modifyProduct","modify_area", Obj);
  event.preventDefault();
});

$( "#changeStatusForm" ).submit(function( event ) {
  var Form = $( "#changeStatusForm" ).serializeArray();
  var Obj = {0:Form[1].value,1:Form[0].value,2:Form[2].value};
  // array of string values of the form 
  XHRPOST("/changeStatus","status_area", Obj);
  event.preventDefault();
});

$( "#searchProductForm" ).submit(function( event ) {
  var Form = $( "#searchProductForm" ).serializeArray();
  var Obj = {0:Form[0].value};
  //string value of the form 
  XHRPOST("/searchProduct","search_area", Obj);
  event.preventDefault();
});

$( "#historyForm" ).submit(function( event ) {
  var Form = $( "#historyForm" ).serializeArray();
  var Obj = {0:Form[0].value};
  //string value of the form 
  XHRPOST("/history","history_area", Obj);
  event.preventDefault();
});

const button = document.getElementById('queryAll');
button.addEventListener('click', function(e) {
  console.log('button was clicked');
  XHR1("/queryAll","text_area");

    
}


);