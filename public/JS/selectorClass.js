/*global require:false, console:false, __dirname: false, document:false, window: false*/
/*jshint esversion: 6 */
/*jslint node: true*/
"use strict";

/**
*
*/
class Selector {

	constructor(title,asideId,objectName){

		this.title = title;
		this.aside = document.getElementById(asideId);
		this.name = objectName;
	}

	//use -> obj.showSelector();
	showSelector(){
		this.aside.innerHTML += `<h4 onClick="${this.name}.toggleView()"><span id="${this.name}Arrow" class="toggleArrow">&#9654;</span>${this.title}</h4><div style="display:none;" id="${this.name}Body"></div>`; 
	}

	//use -> obj.addtoggleView();
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

	//use -> obj.addHeading(<heading text>);
	addHeading(heading){
		let selectorBody = document.getElementById(`${this.name}Body`);
		selectorBody.innerHTML += `<h1>${heading}</h1>`;
	}

	//use -> obj.addTextBox(<id>);
	addTextBox(id){
		let selectorBody = document.getElementById(`${this.name}Body`);
		selectorBody.innerHTML += `<input id="${id}" type="text">`;
	}

	//use -> obj.addParagraph(<paragraph text>);
	addParagraph(message){
		let selectorBody = document.getElementById(`${this.name}Body`);
		selectorBody.innerHTML += `<p>${message}</p>`;
	}

	//use -> obj.addButton(<button title>, <button id>);
	addButton(title,id){
		let selectorBody = document.getElementById(`${this.name}Body`);
		selectorBody.innerHTML += `<button id="${id}">${title}</button>`;
	}

	addWidthTextBox(id, targetId){
		let selectorBody = document.getElementById(`${this.name}Body`);
		selectorBody.innerHTML += `<p>Width:<input id="${id}" type="text" onkeypress="updateElement.width(${targetId}, document.getElementById(id).value)">px</p>`;
	}

	addHeightTextBox(id, targetId){
		let selectorBody = document.getElementById(`${this.name}Body`);
		selectorBody.innerHTML += `<p>Height:<input id="${id}" type="text" onkeypress="updateElement.height(${targetId}, document.getElementById(id).value)">px</p>`;
	}

//    translate things below into this classß

	// const setColor = () => {
	//     currentColor = document.getElementById("currentShapeC").value;
	//     console.log(currentColor);
	// };

    //event listeners
    // let button = document.getElementById('download');
    // button.addEventListener('click', (e) => {
    //     let dataURL = canvasFrame.toDataURL('image/png');
    //     button.href = dataURL;
    // });
	

}