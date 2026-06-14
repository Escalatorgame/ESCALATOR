let trainPosition = -350;
let trainSpeed = 5;
let trainTimer;

function startTrain(){

    let train = document.getElementById("movingTrain");

    trainPosition = -350;
    train.style.right = trainPosition + "px";

    clearInterval(trainTimer);

    trainTimer = setInterval(function(){

        // Random speed
        trainSpeed = Math.random() * 4 + 3;

        // Move left
        trainPosition += trainSpeed;

        // When it reaches the left side,
        // send it back to the right side
        if(trainPosition > window.innerWidth + 100){
            trainPosition = -350;
        }

        train.style.right = trainPosition + "px";

    }, 40);
}

function stopTrain(){
    clearInterval(trainTimer);
}
