'use strict';

document.addEventListener('DOMContentLoaded',function(){

    let canvasDom = document.getElementById("canvas");

    let ctx = canvasDom.getContext('2d');

    ctx.strokeStyle = "#262626";
    ctx.strokeRect(0,0,200,100);

    ctx.strokeStyle = "#00B74A";
    ctx.strokeRect(200,0,200,100);

    ctx.fillStyle = "#F93154";
    ctx.fillRect(400,0,200,100);

    
});