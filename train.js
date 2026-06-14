let trainPosition = -350;
let trainTimer;
let trainSpeed = 8;

function startTrain(){

    let train = document.getElementById("movingTrain");

    trainPosition = -350;
    train.style.right = trainPosition + "px";

    clearInterval(trainTimer);

    trainTimer = setInterval(function(){

        // Randomly change speed sometimes
        if(Math.random() < 0.08){
            trainSpeed = Math.random() * 12 + 3;
        }

        // Move train
        trainPosition += trainSpeed;

        train.style.right = trainPosition + "px";

        // Immediately come back from the right
        if(trainPosition >= window.innerWidth - 200){

            trainPosition = -350;

            // Give a new random speed every time it returns
            trainSpeed = Math.random() * 12 + 3;
        }

    }, 25);
}


function stopTrain(){

    clearInterval(trainTimer);

}
