/* Video Portfolio */

//Variables

const videoContainer = document.getElementById('videoContainer');
const videoLeftBtn = document.getElementById('videoLeftBtn');
const videoRightBtn = document.getElementById('videoRightBtn');
var numVideoCards;
var numMarginLeft;
var counter=-100;


//Fetch Json and change DOM
fetch("./json/portfolio/videoPortfolio.json")
    .then(Response => Response.json())
    .then(data => {
        var cardsData = Object.values(data);
        //console.log(testing[0]["Name"]);
        numVideoCards = Object.keys(data).length;
        numMarginLeft = -(numVideoCards*100) +100;

        //Adjust widths
        videoContainer.style.width = (numVideoCards*100)+"%";

        for(var i=0; i<numVideoCards;i++){

            //Create first div
            var newFirstDiv = document.createElement('div');
            newFirstDiv.style.width = (100/numVideoCards)+"%";

            //Create second div
            var newSecondDiv = document.createElement('div');

            //Create second div elements
            var newH3 = document.createElement('h3');
            var newTitle = document.createTextNode(cardsData[i]["Name"]);
            var newIFrame = document.createElement("IFRAME");
            newIFrame.src = cardsData[i]["Src"];
            newIFrame.allow="autoplay; fullscreen; picture-in-picture";
            //newIFrame.setAttribute('allowFullScreen', '');
            newIFrame.allowFullscreen = true;
            newIFrame.frameborder="0";
            var newDescription = document.createTextNode(cardsData[i]["Description"]);
            var newP = document.createElement('p');



            //Append
            newH3.appendChild(newTitle);
            newSecondDiv.appendChild(newH3);
            newSecondDiv.appendChild(newIFrame);
            newP.appendChild(newDescription);
            newSecondDiv.appendChild(newP);
            newFirstDiv.appendChild(newSecondDiv);
            videoContainer.appendChild(newFirstDiv);

        }
    });

function moveVideoLeft(){
    if(parseInt(videoContainer.style.marginLeft)<0){
        videoContainer.style.marginLeft = parseInt(videoContainer.style.marginLeft) - counter +"%";
/*         if(parseInt(videoContainer.style.marginLeft)=numMarginLeft){
            //TODO:DisableButton;
        } */
    }
}

function moveVideoRight(){
    if(parseInt(videoContainer.style.marginLeft)>numMarginLeft){
        videoContainer.style.marginLeft = parseInt(videoContainer.style.marginLeft) + counter +"%";
/*         if(parseInt(videoContainer.style.marginLeft)=numMarginLeft){
            //TODO:DisableButton;
        } */
    }
}

//Event Listeners
videoLeftBtn.addEventListener('click', moveVideoLeft);

videoRightBtn.addEventListener('click', moveVideoRight);


//On Load
videoContainer.style.marginLeft = 0+"%";


