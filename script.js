var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

// Rectangle
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
ctx.rect(180, 180, 430, 200);
ctx.stroke();

// Circles
ctx.beginPath()
ctx.lineWidth = 5;
ctx.strokeStyle = "blue";
ctx.arc(270, 250, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.arc(390, 250, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.lineWidth = 5;
ctx.strokeStyle = "red";
ctx.arc(510, 250, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.lineWidth = 5;
ctx.strokeStyle = "yellow";
ctx.arc(330, 300, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.lineWidth = 5;
ctx.strokeStyle = "green";
ctx.arc(455, 300, 50, 0, 2*Math.PI);
ctx.stroke();