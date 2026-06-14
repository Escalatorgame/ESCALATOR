let trainPosition = -350;
let trainTop = 18.3;
let trainTimer;
let trainSpeed = 2.5;

function startTrain(){

    let train = document.getElementById("movingTrain");

    // Start position
    trainPosition = -350;
    trainTop = 18.3;

    train.style.right = trainPosition + "px";
    train.style.top = trainTop + "%";

    clearInterval(trainTimer);

    trainTimer = setInterval(function(){

        // Natural speed changes
        if(Math.random() < 0.02){
            trainSpeed = Math.random() * 1 + 2;
        }

        // Move train from right to left
        trainPosition += trainSpeed;

        // Keep train moving in a straight line
        train.style.right = trainPosition + "px";
        train.style.top = trainTop + "%";

        // When train leaves the left side
        if(trainPosition >= window.innerWidth - 20){

            // Bring it back immediately from the right side
            trainPosition = -350;
            trainTop = 18.3;

            train.style.right = trainPosition + "px";
            train.style.top = trainTop + "%";

            // Give a new natural speed
            trainSpeed = Math.random() * 1 + 2;
        }

    }, 30);
}

function stopTrain(){
    clearInterval(trainTimer);
}
