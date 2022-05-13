/* Resume JS */


//Variables

const resumeUnderline = document.getElementById('resumeUnderline');
const resumeBtns = document.querySelectorAll('#resumeSelector button');
const resumeSectionsAreas = document.querySelectorAll('#resumeSections .resume-section');
const resumeMenuBtns =document.querySelectorAll('#resumeBtnArea button');
const resumeMenuBtnsIs = document.querySelectorAll('#resumeBtnArea button i');
const videoElements = document.querySelectorAll('.videoElement');
const webElements = document.querySelectorAll('.webElement');
const dataElements = document.querySelectorAll('.dataElement');
const divsCourses = document.querySelectorAll('#onlineCourses div');
var numDasharray;
var positionNum;
const skillsDivs = document.querySelectorAll('.skills .skillsDiv');
const positionName = document.getElementById('positionName');

const positionName1 = document.createTextNode('Content Creator');
const positionName2 = document.createTextNode('Web Developer');
const positionName3 = document.createTextNode('Data Analyst');

//Functions

function changeLinePosition2(line,e){
    line.style.left= e.getBoundingClientRect().left-e.parentNode.getBoundingClientRect().left+ (e.parentNode.getBoundingClientRect().width*3/100)+"px";
    line.style.width=e.getBoundingClientRect().width+ (e.parentNode.getBoundingClientRect().width*3/100)+"px";
    //portfolioUnderline.style.top= e.getBoundingClientRect().bottom+"px";
}

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

function dasharraySize(){
    if (window.matchMedia("(max-width: 480px)").matches) { // If media query matches
        numDasharray = 251;
    } else if(window.matchMedia("(max-width: 768px)").matches){
        numDasharray = 251;
    }else if(window.matchMedia("(max-width: 1024px)").matches){
        numDasharray = 251;
    }else if(window.matchMedia("(max-width: 1280px)").matches){
        numDasharray = 251;
    }else if(window.matchMedia("(max-width: 1920px)").matches){
        numDasharray = 500;
    }else{
        numDasharray = 0;
    }
  }

dasharraySize();

function animateWheels(circ, target){
    circ.animate([
        // fotogramas clave
        { strokeDashoffset: numDasharray },
        { strokeDashoffset: target }
      ], {
        // opciones de sincronización
        duration: 1500,
        easing: 'ease-in-out'
      });
}

function checkCoursesSection(){
    if(positionNum == 4 || window.matchMedia("(min-width: 1024px)").matches){
        var allSecondCircles = document.querySelectorAll('.courses a div svg .second-circle');
        allSecondCircles.forEach(circle=>{
            animateWheels(circle, circle.style.strokeDashoffset);
        })
    }
}

//Dom Manipulation

function addNewCourse(group, object){
    var courseDiv = document.createElement('div');
    var coursePercentage = document.createTextNode(`${object.Progress}%`);
    var coursePercentageP =document.createElement('p');
    var courseDivImg = document.createElement('div');
    var courseA = document.createElement('a');
    var courseTitle = document.createTextNode(object.Name);
    var courseh4 = document.createElement('h4');
    var coursePlatform = document.createTextNode(`Platform: ${object.platform}`);
    var courseP = document.createElement('p');

    courseDiv.classList.add('courses');

        //Percemtage wheel
    var courseSvg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
    var courseCirc1 = document.createElementNS("http://www.w3.org/2000/svg",'circle');
    var courseCirc2 = document.createElementNS("http://www.w3.org/2000/svg",'circle');
    courseCirc1.setAttribute("cx",100);
    courseCirc1.setAttribute("cy",90);
    courseCirc1.setAttribute("r",80);
    courseCirc2.setAttribute("cx",100);
    courseCirc2.setAttribute("cy",90);
    courseCirc2.setAttribute("r",80);

    courseCirc1.style.strokeDasharray = numDasharray;
    courseCirc2.style.strokeDasharray = numDasharray;

    var numDasharrayTarget = numDasharray - (numDasharray*object.Progress)/100;
    courseCirc2.style.strokeDashoffset = numDasharrayTarget;
    courseCirc2.classList.add('second-circle');

    courseSvg.appendChild(courseCirc1);
    courseSvg.appendChild(courseCirc2);

    courseA.href = object.url;
    courseA.setAttribute("target","_blank");
    coursePercentageP.appendChild(coursePercentage);
    courseDivImg.style.backgroundImage = `url(${object.imgSrc})`;
    courseDivImg.appendChild(courseSvg);
    courseDivImg.appendChild(coursePercentageP);

    courseA.appendChild(courseDivImg);
    courseDiv.appendChild(courseA);
    courseh4.appendChild(courseTitle);
    courseDiv.appendChild(courseh4);
    courseP.appendChild(coursePlatform);
    courseDiv.appendChild(courseP);


    group.appendChild(courseDiv);


    animateWheels(courseCirc2, numDasharrayTarget);


    
}

//Fetch

fetch("./json/resume/courses.json")
    .then(Response => Response.json())
    .then(data => {
        var courses = Object.values(data);
        //console.log(courses[0]["tags"]["videoCourse"]);

        courses.forEach(courseObject=>{
            //console.log(courseObject.tags.videoCourse);
            if(courseObject.tags.videoCourse == true){
                addNewCourse(divsCourses[0], courseObject);
            }
            if(courseObject.tags.webCourse == true){
                addNewCourse(divsCourses[1], courseObject);

            }
            if(courseObject.tags.dataCourse == true){
                addNewCourse(divsCourses[2], courseObject);

            }
        });

        }
    );

//Event Listeners

resumeMenuBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        positionNum = Array.prototype.indexOf.call(resumeMenuBtns, btn);
        colorBtnsIsBlack();
        resumeMenuBtnsIs[positionNum].style.color="red";
        removeAreasSpotlight();
        resumeSectionsAreas[positionNum+1].classList.add("resume-spotlight");

        checkCoursesSection();
    });
})


resumeBtns[0].addEventListener('click', ()=>{
    changeLinePosition2(resumeUnderline, resumeBtns[0]);
    makeElementsPop(webElements, "black");
    makeElementsPop(dataElements, "black");
    makeElementsPop(videoElements, "red");
    divsCourses[1].classList.remove('active-courses');
    divsCourses[2].classList.remove('active-courses');
    divsCourses[0].classList.add('active-courses');
    skillsDivs[1].classList.remove('skills-active');
    skillsDivs[2].classList.remove('skills-active');
    skillsDivs[0].classList.add('skills-active');
    positionName.removeChild(positionName.firstChild);
    positionName.appendChild(positionName1);
    positionName.classList.toggle('position-name-animation1');
    positionName.classList.toggle('position-name-animation2');

    

    checkCoursesSection();


});

resumeBtns[1].addEventListener('click', ()=>{
    changeLinePosition2(resumeUnderline, resumeBtns[1]);
    makeElementsPop(videoElements, "black");
    makeElementsPop(dataElements, "black");
    makeElementsPop(webElements, "red");
    divsCourses[0].classList.remove('active-courses');
    divsCourses[2].classList.remove('active-courses');
    divsCourses[1].classList.add('active-courses');
    skillsDivs[0].classList.remove('skills-active');
    skillsDivs[2].classList.remove('skills-active');
    skillsDivs[1].classList.add('skills-active');
    positionName.removeChild(positionName.firstChild);
    positionName.appendChild(positionName2);
    positionName.classList.toggle('position-name-animation1');
    positionName.classList.toggle('position-name-animation2');






    checkCoursesSection();

});

resumeBtns[2].addEventListener('click', ()=>{
    changeLinePosition2(resumeUnderline, resumeBtns[2]);
    makeElementsPop(videoElements, "black");
    makeElementsPop(webElements, "black");
    makeElementsPop(dataElements, "red");
    divsCourses[0].classList.remove('active-courses');
    divsCourses[1].classList.remove('active-courses');
    divsCourses[2].classList.add('active-courses');
    skillsDivs[0].classList.remove('skills-active');
    skillsDivs[1].classList.remove('skills-active');
    skillsDivs[2].classList.add('skills-active');
    positionName.removeChild(positionName.firstChild);
    positionName.appendChild(positionName3);
    positionName.classList.toggle('position-name-animation1');
    positionName.classList.toggle('position-name-animation2');


    checkCoursesSection();

});




//On Load
document.addEventListener('DOMContentLoaded', changeLinePosition2(resumeUnderline, resumeBtns[0]));
resumeMenuBtnsIs[0].style.color="red";
resumeSectionsAreas[1].classList.add("resume-spotlight")
makeElementsPop(videoElements, "red");
skillsDivs[0].classList.add('skills-active');

if(window.matchMedia("(min-width: 1024px)").matches){
    resumeSectionsAreas[1].classList.remove("resume-spotlight");
}

positionName.appendChild(positionName1);



//Tests

