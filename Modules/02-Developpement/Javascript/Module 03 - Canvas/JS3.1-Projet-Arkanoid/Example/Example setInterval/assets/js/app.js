
document.addEventListener('DOMContentLoaded', function () {
    let canvasDom = document.getElementById("canvas");
    let context = canvasDom.getContext('2d');

    canvasDom.style.border = "2px solid black";



    context.fillStyle = '#1266F1';
    context.fillRect(300, 700, 200, 50);


    const paddle = {
        xPos: 0,

    };

        // Exemple Keydown
        document.addEventListener("keydown", function (eventKeyDown) {
            if (eventKeyDown.keyCode === 39) {
                context.clearRect(paddle.xPos, 0, 200, 50);
                paddle.xPos = paddle.xPos + 15;
                context.fillRect(paddle.xPos, 0, 200, 50);
            } else if(eventKeyDown.keyCode === 37){
                context.clearRect(paddle.xPos, 0, 200, 50);
                paddle.xPos = paddle.xPos - 15;
                context.fillRect(paddle.xPos, 0, 200, 50);
            }
    
        });




    /***************************************************************
    // Canvas avec setInterval tt les 20ms
    setInterval(function () {
        context.clearRect(paddle.xPos, 0, 200, 50);
        paddle.xPos = paddle.xPos+ 5;
        context.fillRect(paddle.xPos, 0,200, 50 );
    },20);
    *****************************************************************/
});