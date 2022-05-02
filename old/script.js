var counter = 1;
var numOfImages = 5;

document.getElementById('radio'+counter).checked = true;
counter++;

setInterval(function(){
    document.getElementById('radio'+counter).checked = true;
    counter++;
    if(counter > numOfImages){
        counter = 1;
    }
}, 5000)



var radio1 = document.getElementById("radio1");
radio1.addEventListener("click", function() {
    counter = 1;
  });

var radio2 = document.getElementById("radio2");
  radio2.addEventListener("click", function() {
    counter = 2;
  });

var radio3 = document.getElementById("radio3");
  radio3.addEventListener("click", function() {
    counter = 3;
  });

var radio4 = document.getElementById("radio4");
  radio4.addEventListener("click", function() {
    counter = 4;
  });

var radio5 = document.getElementById("radio5");
  radio5.addEventListener("click", function() {
    counter = 5;
  });
