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

function changeLinePosition(e){
    portfolioUnderline.style.left= e.getBoundingClientRect().left-7 +"px";
    portfolioUnderline.style.width=e.getBoundingClientRect().width+14+"px";
    portfolioUnderline.style.top= e.getBoundingClientRect().bottom+"px";
}


//Event Listeners

constructionWebBtn.addEventListener('click', ()=>{
    videoPortfolio.style.display = 'inline';
    webPortfolio.style.display='none';
    changeLinePosition(portfolioBtns[0]);
});

constructionDataBtn.addEventListener('click', ()=>{
    videoPortfolio.style.display = 'inline';
    dataPortfolio.style.display='none';
    changeLinePosition(portfolioBtns[0]);
});

portfolioBtns[0].addEventListener('click', ()=>{
    if(videoPortfolio.style.display = 'none'){
        videoPortfolio.style.display = 'inline';
        webPortfolio.style.display='none';
        dataPortfolio.style.display='none';
    }
    changeLinePosition(portfolioBtns[0]);
});

portfolioBtns[1].addEventListener('click', ()=>{
    if(webPortfolio.style.display = 'none'){
        videoPortfolio.style.display = 'none';
        webPortfolio.style.display='flex';
        dataPortfolio.style.display='none';
    }
    changeLinePosition(portfolioBtns[1]);
});

portfolioBtns[2].addEventListener('click', ()=>{
    if(dataPortfolio.style.display = 'none'){
        videoPortfolio.style.display = 'none';
        webPortfolio.style.display='none';
        dataPortfolio.style.display='flex';
    }
    changeLinePosition(portfolioBtns[2]);
});






//On Load
videoPortfolio.style.display = 'inline';
changeLinePosition(portfolioBtns[0]);


