/*global console:false, updateCanvas:false, canvas:false*/
/*jshint unused:false*/


class Events{

	static mouseMove(e){

		console.log("running...");
		let mouseCordDisplay = document.getElementById('footerCords');
		//console.log(canvas[0].title+'Cordinates');

		mouseCordDisplay.innerHTML = `Mouse X: ${e.offsetX}px, Y: ${e.offsetY}px`;

		updateCanvas();
	}

	static mouseDown(e){

		console.log(e);
		updateCanvas();
	}

	static mouseUp(e){

		console.log(e);
		updateCanvas();
	}

	static mouseOut(e){

		console.log(e);
		updateCanvas();
	}

}

//Events.mouseMove(10);