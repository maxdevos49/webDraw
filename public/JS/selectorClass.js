/*global require:false, console:false, __dirname: false, document:false, window: false*/
// jshint esversion: 6 
"use strict";

class Selector {

	constructor(title,asideId,objectName){

		this.title = title;
		this.aside = document.getElementById(asideId);
		this.name = objectName;
	}

	showSelector(){
		this.aside.innerHTML += `<h4 onClick="${this.name}.toggleView()"><span id="${this.name}Arrow" class="toggleArrow">&#9654;</span>${this.title}</h4><div style="display:none;" id="${this.name}Body"></div>`; 
	}

	toggleView(){//show or hide a selectors contents
		let selectedSelector = document.getElementById(`${this.name}Body`);
		let toggleArrow = document.getElementById(`${this.name}Arrow`);

	    if (selectedSelector.style.display === "none") {
	        selectedSelector.style.display = "block";
	        toggleArrow.innerHTML = "&#9661;";
	    } else {
	        selectedSelector.style.display = "none";
	        toggleArrow.innerHTML = "&#9654;";
	    }
	}

	addHeading(heading){
		console.log("I ran!!");
		let selectorBody = document.getElementById(`${this.name}Body`);
		selectorBody.innerHTML += `<h1>${heading}</h1>`;
	}

	addTextBox(){

	}

	addParagraph(){

	}

	addButton(){
		
	}

	

}