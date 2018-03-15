/*global dragElement:false, Events:false*/

class Canvas {

	static createCanvas(data){ 

		document.getElementById("canvasContainer").innerHTML += `

		<div class="canvasWindow" id="${data.title}Window">
			<div class="canvasHeader" id="${data.title}Windowheader">
				${data.title}
			</div>
				<canvas id="${data.title}" width="${data.width}" height="${data.height}"></canvas>
			<div class="canvasFooter">
				<span class="footerCords" id="footerCords">Mouse X: 100px, Y: 234px</span>
			</div>
		</div>`;

		if (data.draggable){
			dragElement(document.getElementById(`${data.title}Window`));
		}

		//add Event listeners

		let canvasFrame = document.getElementById(data.title);

		canvasFrame.addEventListener('mousedown', Events.mouseDown);
		canvasFrame.addEventListener('mouseup', Events.mouseUp);
		canvasFrame.addEventListener('mousemove', Events.mouseMove);
		canvasFrame.addEventListener('mouseout',Events.mouseOut);
		canvasFrame.addEventListener('mouseover',Events.mouseover);
		
	}

	// static deleteCanvas(data){

	// }

	static clearCanvas(data){
		var canvasFrame = document.getElementById(data.title);
		var context = canvasFrame.getContext("2d");
		context.clearRect(0, 0, canvasFrame.width, canvasFrame.height);
	}

	static canvasBackground(data){//change the background of the canvas between white and transparent background

	    if(data.background === false){
	        document.getElementById(`${data.title}`).style.backgroundImage = "none";
	        document.getElementById(`${data.title}`).style.backgroundColor = "white";
	    }else{
	        document.getElementById(`${data.title}`).style.backgroundImage = "linear-gradient(45deg, #d4d6d8 25%, transparent 10%), linear-gradient(-45deg, #d4d6d8 25%, transparent 10%), linear-gradient(45deg, transparent 75%, #d4d6d8 75%), linear-gradient(-45deg, transparent 75%, #d4d6d8 75%)";
	    }

	    data.background = !data.background;
		
	}

	

	static drawFillRect(data,width,height){

		var canvasFrame = document.getElementById(data.title);
		var context = canvasFrame.getContext("2d");
		context.fillStyle = currentColor;
		context.fillRect(0,0,width,height);

	}

	static drawEmptyRect(data,width,height){
		var canvasFrame = document.getElementById(data.title);
		var context = canvasFrame.getContext("2d");
		context.rect(0,0,width,height);

	}

	// static drawFillCircle(data){

	// }

	// static drawEmptyCircle(data){

	// }
	

	// static drawFillStar(data){

	// }

	// static drawFillStar(data){

	// }

}

