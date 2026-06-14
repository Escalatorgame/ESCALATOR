let trainPosition = -350;
let trainSpeed = 3;
let trainTimer;

function startTrain(){

    let train = document.getElementById("movingTrain");

    trainPosition = -350;
    train.style.right = trainPosition + "px";

    clearInterval(trainTimer);

    trainTimer = setInterval(function(){

        // Change speed randomly
        trainSpeed = Math.random() * 5 + 2;

        trainPosition += trainSpeed;

        // Stop the train around the middle of the screen
        if(trainPosition > window.innerWidth / 2){
            trainPosition = window.innerWidth / 2;
        }

        train.style.right = trainPosition + "px";

    }, 40);
}


function stopTrain(){

    clearInterval(trainTimer);
}
