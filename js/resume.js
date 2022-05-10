/* Resume JS */


//Variables

const resumeUnderline = document.getElementById('resumeUnderline');
const resumeBtns = document.querySelectorAll('#resumeSelector button');
const resumeSectionsAreas = document.querySelectorAll('#resumeSections div');
const resumeMenuBtns =document.querySelectorAll('#resumeBtnArea button');
const resumeMenuBtnsIs = document.querySelectorAll('#resumeBtnArea button i');
const videoElements = document.querySelectorAll('.videoElement');
const webElements = document.querySelectorAll('.webElement');
const dataElements = document.querySelectorAll('.dataElement');

//Functions

function colorBtnsIsBlack(){
    resumeMenuBtnsIs.forEach(i => i.style.color = "black");
}

function removeAreasSpotlight(){
    resumeSectionsAreas.forEach(area => area.classList.remove("resume-spotlight"));
}

function makeElementsPop(elements, newColor){
    elements.forEach(element=>{
        element.style.color = newColor;
    })
}

//Event Listeners

resumeMenuBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        //console.log(resumeMenuBtns.indexOf(btn));
        var positionNum = Array.prototype.indexOf.call(resumeMenuBtns, btn);
        colorBtnsIsBlack();
        resumeMenuBtnsIs[positionNum].style.color="red";
        removeAreasSpotlight();
        resumeSectionsAreas[positionNum+1].classList.add("resume-spotlight");
    });
})



resumeBtns[0].addEventListener('click', ()=>{
    changeLinePosition(resumeUnderline, resumeBtns[0]);
    makeElementsPop(webElements, "black");
    makeElementsPop(dataElements, "black");
    makeElementsPop(videoElements, "red");


});

resumeBtns[1].addEventListener('click', ()=>{
    changeLinePosition(resumeUnderline, resumeBtns[1]);
    makeElementsPop(videoElements, "black");
    makeElementsPop(dataElements, "black");
    makeElementsPop(webElements, "red");

});

resumeBtns[2].addEventListener('click', ()=>{
    changeLinePosition(resumeUnderline, resumeBtns[2]);
    makeElementsPop(videoElements, "black");
    makeElementsPop(webElements, "black");
    makeElementsPop(dataElements, "red");
});




//On Load
document.addEventListener('DOMContentLoaded', changeLinePosition(resumeUnderline, resumeBtns[0]));
resumeMenuBtnsIs[0].style.color="red";
resumeSectionsAreas[1].classList.add("resume-spotlight")
makeElementsPop(videoElements, "red");


//Tests

