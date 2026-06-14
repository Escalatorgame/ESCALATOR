let trainPosition = -350;
let trainTimer;
let trainSpeed = 2.5;

function startTrain(){

    let train = document.getElementById("movingTrain");

    // Start from the right side
    trainPosition = -350;
    train.style.right = trainPosition + "px";

    clearInterval(trainTimer);

    trainTimer = setInterval(function(){

        // Slight natural speed changes
        if(Math.random() < 0.02){
            trainSpeed = Math.random() * 1 + 2;
        }

        // Move the train
        trainPosition += trainSpeed;

        train.style.right = trainPosition + "px";

        // The moment the train leaves the left side,
        // bring it back immediately from the right side
        if(trainPosition >= window.innerWidth - 20){

            trainPosition = -350;

            train.style.right = trainPosition + "px";

            // Give a new natural speed
            trainSpeed = Math.random() * 1 + 2;
        }

    }, 30);
}


function stopTrain(){

    clearInterval(trainTimer);

}
