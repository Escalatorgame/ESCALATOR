let trainPosition = -350;
let trainTimer;
let trainSpeed = 3;

function startTrain(){

    let train = document.getElementById("movingTrain");

    // Start from the right side
    trainPosition = -350;
    train.style.right = trainPosition + "px";

    clearInterval(trainTimer);

    trainTimer = setInterval(function(){

        // Slight natural speed changes
        if(Math.random() < 0.02){
            trainSpeed = Math.random() * 1.5 + 2;
        }

        // Move the train
        trainPosition += trainSpeed;

        train.style.right = trainPosition + "px";

        // Once the train has completely left the screen,
        // bring it back instantly from the right
        if(trainPosition > window.innerWidth + 350){

            trainPosition = -350;

            // New natural speed
            trainSpeed = Math.random() * 1.5 + 2;
        }

    }, 30);
}


function stopTrain(){

    clearInterval(trainTimer);

}
