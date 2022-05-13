/* Portfolio JS */


//Variables

const portfolioUnderline = document.getElementById('portfolioUnderline');
const portfolioBtns = document.querySelectorAll('#portfolioSelector button');
const videoPortfolio = document.getElementById('videoPortfolio');
const webPortfolio = document.getElementById('webPortfolio');
const dataPortfolio = document.getElementById('dataPortfolio');
const constructionWebBtn = document.getElementById('constructionWebBtn');
const constructionDataBtn = document.getElementById('constructionDataBtn');


//Functions

function changeLinePosition1(line,e){
    line.style.left= e.getBoundingClientRect().left- 7+"px";
    line.style.width=e.getBoundingClientRect().width+ 14+"px";
    //portfolioUnderline.style.top= e.getBoundingClientRect().bottom+"px";
}


//Event Listeners

constructionWebBtn.addEventListener('click', ()=>{
    videoPortfolio.style.display = 'inline';
    webPortfolio.style.display='none';
    changeLinePosition1(portfolioUnderline,portfolioBtns[0]);
});

constructionDataBtn.addEventListener('click', ()=>{
    videoPortfolio.style.display = 'inline';
    dataPortfolio.style.display='none';
    changeLinePosition1(portfolioUnderline,portfolioBtns[0]);
});

portfolioBtns[0].addEventListener('click', ()=>{
    if(videoPortfolio.style.display = 'none'){
        videoPortfolio.style.display = 'inline';
        webPortfolio.style.display='none';
        dataPortfolio.style.display='none';
    }
    changeLinePosition1(portfolioUnderline,portfolioBtns[0]);
});

portfolioBtns[1].addEventListener('click', ()=>{
    if(webPortfolio.style.display = 'none'){
        videoPortfolio.style.display = 'none';
        webPortfolio.style.display='flex';
        dataPortfolio.style.display='none';
    }
    changeLinePosition1(portfolioUnderline,portfolioBtns[1]);
});

portfolioBtns[2].addEventListener('click', ()=>{
    if(dataPortfolio.style.display = 'none'){
        videoPortfolio.style.display = 'none';
        webPortfolio.style.display='none';
        dataPortfolio.style.display='flex';
    }
    changeLinePosition1(portfolioUnderline,portfolioBtns[2]);
});

window.addEventListener("resize", () => {
    changeLinePosition1(portfolioUnderline,portfolioBtns[0]);
});






//On Load
videoPortfolio.style.display = 'inline';

document.addEventListener('DOMContentLoaded', changeLinePosition1(portfolioUnderline,portfolioBtns[0]));


