/*global require:false, console:false, __dirname: false, document:false, window: false, Selector: false, Canvas:false, moveElement: false*/
// jshint esversion: 6 
/*jslint node:true*/
"use strict";


class Canvas {

	constructor(width,height,x,y,id){

		this.height = height;
		this.width = width;
		this.x = 0;
		this.y = 0;
		this.id = id;
		this.grid = true;
	}

	createCanvas(){ 
		document.getElementById("canvasContainer").innerHTML += `<div class="canvasWindow" id="${this.id}Window"><div class="canvasHeader" id="${this.id}Windowheader">Click here to move</div><canvas id="${this.id}" width="${this.width}" height="${this.height}"></canvas><div class="canvasFooter"><span class="footerCords">Mouse X: 100px, Y: 234px</span></div></div>`;
		var canvasFrame = document.getElementById(this.id);
		var context = canvasFrame.getContext("2d");

		context.fillRect(100,100,100,100);
	}

	deleteCanvas(){

	}

	clearCanvas(){
		var canvasFrame = document.getElementById(this.id);
		var context = canvasFrame.getContext("2d");
		context.clearRect(0, 0, canvasFrame.width, canvasFrame.height);
	}

	canvasBackground(){//change the background of the canvas between white and transparent background

	    if(this.grid){
	        document.getElementById(`${this.id}`).style.backgroundImage = "none";
	        document.getElementById(`${this.id}`).style.backgroundColor = "white";
	    }else{
	        document.getElementById(`${this.id}`).style.backgroundImage = "linear-gradient(45deg, #d4d6d8 25%, transparent 10%), linear-gradient(-45deg, #d4d6d8 25%, transparent 10%), linear-gradient(45deg, transparent 75%, #d4d6d8 75%), linear-gradient(-45deg, transparent 75%, #d4d6d8 75%)";
	    }

	    this.grid = !this.grid;
		
	}

	

	drawCanvasRect(){
		var canvasFrame = document.getElementById(this.id);
		var context = canvasFrame.getContext("2d");
		context.fillRect(300,200,100,100);
	}

}


