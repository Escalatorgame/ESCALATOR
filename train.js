let trainPosition = -350;
let trainTop = 18.5;
let trainTimer;
let trainSpeed = 2.5;

function startTrain(){

    let train = document.getElementById("movingTrain");

    // Start position
    trainPosition = -350;
    trainTop = 18.5;

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

        // Move downward more noticeably (about 2 inches by the end)
        trainTop += 0.012;

        // Apply movement
        train.style.right = trainPosition + "px";
        train.style.top = trainTop + "%";

        // When it leaves the left side
        if(trainPosition >= window.innerWidth - 20){

            // Return to right side at original height
            trainPosition = -350;
            trainTop = 18.5;

            train.style.right = trainPosition + "px";
            train.style.top = trainTop + "%";

            // New random speed
            trainSpeed = Math.random() * 1 + 2;
        }

    }, 30);
}

function stopTrain(){
    clearInterval(trainTimer);
}
