canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");



ctx.begingPath();
ctx.strockeStyle = "grey";
ctx.lineWidth= 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.begingPath();
ctx.strockeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 *math.PI);
ctx.stroke();

ctx.begingPath();
ctx.strockeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 *math.PI);
ctx.stroke();

ctx.begingPath();
ctx.strockeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 *math.PI);
ctx.stroke();

ctx.begingPath();
ctx.strockeStyle = "orange";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 *math.PI);
ctx.stroke();

ctx.begingPath();
ctx.strockeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 *math.PI);
ctx.stroke();