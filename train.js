let trainPosition = -350;
let trainTimer;

function startTrain(){

    let train = document.getElementById("movingTrain");

    // Start from the right side
    trainPosition = -350;
    train.style.right = trainPosition + "px";

    clearInterval(trainTimer);

    trainTimer = setInterval(function(){

        // Random speed (changes naturally)
        let speed = Math.random() * 5 + 3;

        // Move towards the left
        trainPosition += speed;

        train.style.right = trainPosition + "px";

        // Once it has gone far left, bring it back to the right
        if(trainPosition > window.innerWidth + 500){
            trainPosition = -350;
        }

    }, 40);
}

function stopTrain(){
    clearInterval(trainTimer);
}
