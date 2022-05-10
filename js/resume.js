/* Resume JS */


//Variables

const resumeUnderline = document.getElementById('resumeUnderline');
const resumeBtns = document.querySelectorAll('#resumeSelector button');
const resumeSectionsAreas = document.querySelectorAll('#resumeSections div');
const resumeMenuBtns =document.querySelectorAll('#resumeBtnArea button');
const resumeMenuBtnsIs = document.querySelectorAll('#resumeBtnArea button i');

//Functions

function colorBtnsIsBlack(){
    resumeMenuBtnsIs.forEach(i => i.style.color = "black");
}

function removeAreasSpotlight(){
    resumeSectionsAreas.forEach(area => area.classList.remove("resume-spotlight"));
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

resumeBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        changeLinePosition(resumeUnderline, btn);
    });
})


//On Load
document.addEventListener('DOMContentLoaded', changeLinePosition(resumeUnderline, resumeBtns[0]));
resumeMenuBtnsIs[0].style.color="red";
resumeSectionsAreas[1].classList.add("resume-spotlight")


//Tests

