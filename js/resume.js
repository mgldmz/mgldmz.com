/* Resume JS */


//Variables

const resumeUnderline = document.getElementById('resumeUnderline');
const resumeBtns = document.querySelectorAll('#resumeSelector button');

//Functions


//Event Listeners


resumeBtns[0].addEventListener('click', ()=>{
    changeLinePosition(resumeUnderline, resumeBtns[0]);
});

resumeBtns[1].addEventListener('click', ()=>{
    changeLinePosition(resumeUnderline, resumeBtns[1]);
});

resumeBtns[2].addEventListener('click', ()=>{
    changeLinePosition(resumeUnderline, resumeBtns[2]);

});






//On Load
document.addEventListener('DOMContentLoaded', changeLinePosition(resumeUnderline, resumeBtns[0]));