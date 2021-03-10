canvas = document.getElementById("my_olympic");
ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle= "grey";
ctx.lineWidth = 4;
ctx.rect(180, 143, 430, 250, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(290, 210, 40, 0, 2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(390, 210, 40, 0, 2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(490, 210, 40, 0, 2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "coral";
ctx.lineWidth = 5;
ctx.arc(340, 250, 40, 0, 2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(440, 250, 40, 0, 2*Math.PI)
ctx.stroke();