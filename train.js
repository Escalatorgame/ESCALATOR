let trainPosition = -350;
let trainTimer;

function startTrain(){

    let train = document.getElementById("movingTrain");

    // Start outside the right side
    trainPosition = -350;
    train.style.right = trainPosition + "px";

    clearInterval(trainTimer);

    trainTimer = setInterval(function(){

        // Move towards the left
        trainPosition += 8;

        train.style.right = trainPosition + "px";

        // Once it completely leaves the left side,
        // immediately send it back to the right side
        if(trainPosition >= window.innerWidth + 350){

            trainPosition = -350;

            train.style.right = trainPosition + "px";
        }

    }, 30);
}

function stopTrain(){

    clearInterval(trainTimer);
}
