let trainPosition = -350;
let trainTimer;

function startTrain(){

    let train = document.getElementById("movingTrain");

    // Put train back at the right side
    trainPosition = -350;
    train.style.right = trainPosition + "px";

    clearInterval(trainTimer);

    trainTimer = setInterval(function(){

        trainPosition += 6;

        train.style.right = trainPosition + "px";

        // Stop when it has crossed the screen
        if(trainPosition > window.innerWidth + 400){
            clearInterval(trainTimer);
        }

    }, 30);
}


// Stop the train during accident
function stopTrain(){

    clearInterval(trainTimer);

}
