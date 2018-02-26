/*global require:false, console:false, __dirname: false, document:false, window: false*/
// jshint esversion: 6 
"use strict";


class Canvas {

	constructor(height,width,x,y,id){

		this.height = height;
		this.width = width;
		this.x = x;
		this.y = y;
		this.id = id;

	}

	createCanvas(){
		let canvasWindow = document.createElement("DIV");
		document.getElementByID("canvasContainer").appendChild(canvasWindow);
		canvasWindow.innerHTML = `<div id="${this.id}Header">Click here to move</div><canvas id="${this.id}" width="${this.width}" height="${this.height}"></canvas>`;
	}

	changeBackground(){
		
	}



}


