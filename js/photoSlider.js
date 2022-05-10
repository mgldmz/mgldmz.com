/* Photo Slider */

//Variables

var pCounter = -100;
const slides = document.getElementById('slides');
const presentationSlider = document.getElementById('presentationSlider');
const numOfImages = 5;


//Functions

function movePresentationRight(){
  if(parseInt(slides.style.marginLeft)>(-(numOfImages*100)+100)){
    slides.style.marginLeft = parseInt(slides.style.marginLeft) + pCounter +"%";
  }else{
    slides.style.marginLeft = 0+"%";
  }
  
}

//Event Listeners

var timer = setInterval(movePresentationRight, 5000);

presentationSlider.addEventListener('click', ()=>{
  movePresentationRight();
  clearInterval(timer);
  timer = setInterval(movePresentationRight, 5000);


});


//On Load
slides.style.marginLeft = 0+"%";
slides.style.width = (numOfImages*100)+"%";


//Test
//movePresentationRight();
