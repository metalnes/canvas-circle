canvas=document.getElementById("canvas")
cvg=canvas.getContext("2d")
var color="red"
cvg.beginPath()
cvg.strokeStyle=color;
cvg.lineWidth=3;
 
cvg.arc(300,300, 50, 0, 2*Math.PI)
cvg.stroke()
canvas.addEventListner("mousedown", mymousedown)
function mymousedown(e){
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    cvg.beginPath()
cvg.strokeStyle=color;
cvg.lineWidth=3;
 
cvg.arc(mousex,mousey, 50, 0, 2*Math.PI)
cvg.stroke()
}

