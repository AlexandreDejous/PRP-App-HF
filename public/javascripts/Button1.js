console.log('Client-side code running');

//method = "POST" , "GET", etc
//adress = "/clicke" , "/clicked", etc
//ID = "HTML_ID"
function XHR1(method, address,ID){
  var req = new XMLHttpRequest();
  req.open(method,address);
  req.onreadystatechange = function(){
      if(req.readyState == 4){
          document.getElementById(ID).innerHTML = req.responseText;
      }
  }
  req.send();
}

const button = document.getElementById('myButton');
button.addEventListener('click', function(e) {
  console.log('button was clicked');
  XHR1("GET","/clicke","text_area");

    
});