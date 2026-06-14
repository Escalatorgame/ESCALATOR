let trainPosition = -350;
let trainTop = 18.5;
let trainTimer;
let trainSpeed = 2.5;

function startTrain(){

    let train = document.getElementById("movingTrain");

    // Start from right side and original height
    trainPosition = -350;
    trainTop = 18.5;

    train.style.right = trainPosition + "px";
    train.style.top = trainTop + "%";

    clearInterval(trainTimer);

    trainTimer = setInterval(function(){

        // Slight natural speed changes
        if(Math.random() < 0.02){
            trainSpeed = Math.random() * 1 + 2;
        }

        // Move train to the left
        trainPosition += trainSpeed;

        // Slowly move train downward
        trainTop += 0.005;

        // Apply movement
        train.style.right = trainPosition + "px";
        train.style.top = trainTop + "%";

        // When train leaves the left side,
        // bring it back instantly from the right
        if(trainPosition >= window.innerWidth - 20){

            trainPosition = -350;
            trainTop = 18.5;

            train.style.right = trainPosition + "px";
            train.style.top = trainTop + "%";

            // New natural speed
            trainSpeed = Math.random() * 1 + 2;
        }

    }, 30);
}


function stopTrain(){

    clearInterval(trainTimer);

}
