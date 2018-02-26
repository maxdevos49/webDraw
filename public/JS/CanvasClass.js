/*global require:false, console:false, __dirname: false, document:false, window: false*/
// jshint esversion: 6 
"use strict";


class Canvas {

	constructor(height,width,x,y,id){

		this.height = height;
		this.width = width;
		this.x = 0;
		this.y = 0;
		this.id = id;
		this.grid = true;

	}

	createCanvas(){ 
		document.getElementById("canvasContainer").innerHTML += `<div class="canvasWindow" id="${this.id}window"><div class="canvasHeader" id="${this.id}Header">Click here to move</div><canvas id="${this.id}" width="${this.width}" height="${this.height}"></canvas><div class="canvasFooter"><p>X:100px, Y: 234px</p></div></div>`;
	}

	deleteCanvas(){

	}

	clearCanvas(){
		//canvas.clearRect(0, 0, canvasFrame.width, canvasFrame.height);
	}

	canvasBackground(){//change the background of the canvas between white and transparent background

	    if(this.grid){
	        document.getElementById(`${this.id}window`).style.backgroundImage = "none";
	        document.getElementById(`${this.id}window`).style.backgroundColor = "white";
	    }else{
	        document.getElementById(`${this.id}window`).style.backgroundImage = "linear-gradient(45deg, #d4d6d8 25%, transparent 10%), linear-gradient(-45deg, #d4d6d8 25%, transparent 10%), linear-gradient(45deg, transparent 75%, #d4d6d8 75%), linear-gradient(-45deg, transparent 75%, #d4d6d8 75%)";
	    }

	    this.grid = !this.grid;
		
	}

	moveCanvas(){

	}





 // const updateCanvas = (setting) => {

 //    if(setting === 1){//resize the width
 //        let input = document.getElementById("canvasSizex").value;
 //        if(input >= 10 && input < 1200){
 //            canvasFrame.width = input;
 //        }else if(input >= 1200){
 //            document.getElementById("canvasSizex").value = 900;
 //            canvasFrame.width = 1200;
 //        }else if(input == ""){
 //            //do nothing if empty
 //        }else if(input <= 0){
 //            document.getElementById("canvasSizex").value = 1;
 //            canvasFrame.width = 1;
 //        }

 //    }else if(setting === 2){//resize the height
 //        let input = document.getElementById("canvasSizey").value;
 //        if(input >= 10 && input < 800){
 //            canvasFrame.height = input;
 //        }else if(input >= 800){
 //            document.getElementById("canvasSizey").value = 700;
 //            canvasFrame.height = 800;
 //        }else if(input == ""){
 //            //do nothing if empty
 //        }else if(input <= 0){
 //            document.getElementById("canvasSizey").value = 1;
 //            canvasFrame.height = 1;
 //        }
 //    }
    
 // };
}


