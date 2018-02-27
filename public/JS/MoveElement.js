/*global require:false, console:false, __dirname: false, document:false, window: false, Selector: false, Canvas:false*/
// jshint esversion: 6 
/*jslint node:true*/
"use strict";

class moveElement{

	static addNewElement(element){

		if(document.getElementById(element+"Header")){
			console.log("Success");
			document.getElementById(element+"Header").addEventListener("mousedown", moveElement.dragMouseDown);
	    	document.getElementById(element+"Header").addEventListener("mouseup", this.dragMouseUp);
	    	document.getElementById(element+"Header").addEventListener("mousemove", this.dragMouseMove);

	    	this.move = false;
	    	this.element = element;
	    	this.pos1 = 0;
	    	this.pos2 = 0;
	    	this.pos3 = 0;
	    	this.pos4 = 0;

		}else{
		 	console.log("This Element does not exist!!!");
		 	console.log(element+"Header");
		}

	}

	dragMouseDown(e){
		console.log("I ran");
		e = e || window.event;
		this.move = true;

		this.pos3 = e.clientX;
		this.pos4 = e.clientY;
	}

	dragMouseMove(e){
		e = e || window.event;
		if(this.move === true){
			let element = document.getElementById(this.element+"window");

			this.pos1 = this.pos3 - e.clientX;
    		this.pos2 = this.pos4 - e.clientY;
    		this.pos3 = e.clientX;
			this.pos4 = e.clientY;

			element.style.top = (element.offsetTop - this.pos2) + "px";
    		element.style.left = (element.offsetLeft - this.pos1) + "px";
		}
	}

	dragMouseUp(e){
		e = e || window.event;
		this.move = false;
	}


}


// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }

// }

