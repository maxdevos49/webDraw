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

	//use -> obj.addButton(<button title>, <button id>,<action as a string>);
	addButton(title, id, action){
		let selectorBody = document.getElementById(`${this.name}Body`);
		selectorBody.innerHTML += `<p><button id="${id}" onclick="${action}">${title}</button><p>`;
	}

	addWidthTextBox(id, targetId, value){
		let selectorBody = document.getElementById(`${this.name}Body`);
		selectorBody.innerHTML += `<p>Width:<input id="${id}" type="text" value="${value}" onkeyup="updateElement.width(${targetId}, document.getElementById(id).value)">px</p>`;
	}

	addHeightTextBox(id, targetId, value){
		let selectorBody = document.getElementById(`${this.name}Body`);
		selectorBody.innerHTML += `<p>Height:<input id="${id}" type="text" value="${value}" onkeyup="updateElement.height(${targetId}, document.getElementById(id).value)">px</p>`;
	}

	addDownloadLink(id, targetId, text){
		let selectorBody = document.getElementById(`${this.name}Body`);
	selectorBody.innerHTML += `<p><a id="${id}" href="#" download="webDraw.png" onclick="dataURL=document.getElementById('${targetId}').toDataURL();document.getElementById('${id}').href = dataURL">${text}</a></p>`;

	}

	addTableofButtons(data){

		for (var i = 0; i < data.length; ++i) {

		}

	}

//    translate things below into this classß

	// const setColor = () => {
	//     currentColor = document.getElementById("currentShapeC").value;
	//     console.log(currentColor);
	// };

	

}