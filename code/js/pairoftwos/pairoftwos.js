function mouseClick(id){

	var getElement = document.getElementById(id);

	if (getElement.style.color == "red")
	{
		getElement.style.color = "black";
		drawLine(getOffset(getElement).left , getOffset(getElement).top);
	}
	else
		getElement.style.color = "red";
}

function drawLine(x, y){
	const canvas = document.querySelector('#canvas');
	const ctx = canvas.getContext('2d');
	// var getElement = document.getElementById(id);
	onmousedown = function() {


	ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;
	ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(100, 100);
    ctx.stroke();
	}
}

function getOffset(el) {
	const rect = el.getBoundingClientRect();
	return {
	  left: rect.left + window.scrollX,
	  top: rect.top + window.scrollY
	};
  }

function findPos(obj){
	var curleft = 0;
	var curtop = 0;

	if (obj.offsetParent) {
	   do {
		  curleft += obj.offsetLeft;
		  curtop += obj.offsetTop;
	   } while (obj = obj.offsetParent);

	   return {X:curleft,Y:curtop};
	}
 }