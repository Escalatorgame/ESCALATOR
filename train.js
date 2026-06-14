let trainPosition = -350;
let trainTimer;
let trainSpeed = 4;

function startTrain(){

    let train = document.getElementById("movingTrain");

    // Start from the right side
    trainPosition = -350;
    train.style.right = trainPosition + "px";

    clearInterval(trainTimer);

    trainTimer = setInterval(function(){

        // Small random speed changes
        if(Math.random() < 0.03){
            trainSpeed = Math.random() * 2 + 3;
        }

        // Move the train
        trainPosition += trainSpeed;

        train.style.right = trainPosition + "px";

        // Wait until the train has fully gone off the left side
        if(trainPosition > window.innerWidth + 350){

            // Bring it back to the right side
            trainPosition = -350;

            // Give it a new speed
            trainSpeed = Math.random() * 2 + 3;
        }

    }, 25);
}


function stopTrain(){

    clearInterval(trainTimer);

}
