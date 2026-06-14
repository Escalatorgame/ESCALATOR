let trainPosition = -350;
let trainTimer;
let trainSpeed = 2.5;

function startTrain(){

    let train = document.getElementById("movingTrain");

    trainPosition = -350;
    train.style.right = trainPosition + "px";

    clearInterval(trainTimer);

    trainTimer = setInterval(function(){

        // Sometimes slightly change speed
        if(Math.random() < 0.03){
            trainSpeed = Math.random() * 2 + 1;
        }

        // Move train slowly
        trainPosition += trainSpeed;

        train.style.right = trainPosition + "px";

        // Immediately appear from the right again
        if(trainPosition >= window.innerWidth - 200){

            trainPosition = -350;

            // New slow random speed
            trainSpeed = Math.random() * 2 + 1;
        }

    }, 30);
}


function stopTrain(){

    clearInterval(trainTimer);

}
