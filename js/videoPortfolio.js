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
        console.log(Object.keys(cardsData[0]["Software"]));
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
            newIFrame.setAttribute('allowFullScreen', '');
            newIFrame.allow="autoplay; fullscreen; picture-in-picture";
            //newIFrame.allowFullscreen = true;
            newIFrame.frameborder="0";
            var newDescription = document.createTextNode(cardsData[i]["Description"]);
            var newsubt1 = document.createTextNode("Description");
            var newh4 = document.createElement('h4');
            var newP = document.createElement('p');
            var newsubt2 = document.createTextNode("Tools Used");
            var newh5 = document.createElement('h5');



            //Append
            newH3.appendChild(newTitle);
            newSecondDiv.appendChild(newH3);
            newSecondDiv.appendChild(newIFrame);
            newh4.appendChild(newsubt1);
            newh5.appendChild(newsubt2);
            newP.appendChild(newDescription);
            newSecondDiv.appendChild(newh4);
            newSecondDiv.appendChild(newP);
            newSecondDiv.appendChild(newh5);
            newFirstDiv.appendChild(newSecondDiv);
            videoContainer.appendChild(newFirstDiv);

            //Create a p for each tool used and append it
            Object.keys(cardsData[i]["Software"]).forEach(tool=>{
                var newToolText = document.createTextNode(tool);
                var newToolP = document.createElement('p');
                newToolP.appendChild(newToolText);
                newSecondDiv.appendChild(newToolP);
            })
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


