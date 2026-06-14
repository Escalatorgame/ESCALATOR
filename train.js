// Train movement system

let trainPosition = -350;
let trainTimer;

// Start train movement
function startTrain(){

    let train = document.getElementById("movingTrain");

    // Reset train to right side
    trainPosition = -350;
    train.style.right = trainPosition + "px";

    clearInterval(trainTimer);

    trainTimer = setInterval(function(){

        trainPosition += 6;

        train.style.right = trainPosition + "px";

        // Stop after crossing the screen
        if(trainPosition > window.innerWidth + 400){

            clearInterval(trainTimer);

        }

    }, 30);
}


// Stop train movement
function stopTrain(){

    clearInterval(trainTimer);

}
