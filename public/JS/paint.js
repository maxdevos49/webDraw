/*global require:false, console:false, __dirname: false, document:false, window: false, Selector: false*/
// jshint esversion: 6 
"use strict";

// let gridShown = true;
// let canvasFrame;
// let canvas;
// let currentColor;
let generalSelector;
let shapeSelector;
let colorSelector;
let settingsSelector;

let attrShapeSelector;
let attributeSelector;

const init = () => {

    //in the future make this work through json??  \/\/\/\/
    /* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/General Aside\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/
    generalSelector = new Selector("General", "generalSelector","generalSelector");//general selector
    generalSelector.showSelector();
    generalSelector.addHeading("Testing!!");

    shapeSelector = new Selector("Shapes", "generalSelector","shapeSelector");//shape selector
    shapeSelector.showSelector();

    colorSelector = new Selector("Color", "generalSelector","colorSelector");//color selector
    colorSelector.showSelector();

    settingsSelector = new Selector("Settings", "generalSelector","settingsSelector");//settings
    settingsSelector.showSelector();

    /* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/Attributes Aside\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/
    attrShapeSelector = new Selector("Shapes", "attributeSelector","attrShapeSelector");//Shapes
    attrShapeSelector.showSelector();

    attributeSelector = new Selector("Attributes", "attributeSelector","attributeSelector");//attributes
    attributeSelector.showSelector();
    






//Make the DIV element draggagle:
 //    dragElement(document.getElementById(("mydiv")));
 //    showGrid();
 //    showGrid();
	// canvasFrame = document.getElementById("canvasFrame");
	// canvas = canvasFrame.getContext("2d");

    //event listeners
    // let button = document.getElementById('download');
    // button.addEventListener('click', (e) => {
    //     let dataURL = canvasFrame.toDataURL('image/png');
    //     button.href = dataURL;
    // });


//remove eventually
	// canvas.fillStyle = "blue";
	// canvas.fillRect(0,0,100,100);
 //    canvas.fillStyle = "red";
 //    canvas.fillRect(50 ,50,100,100);
 //    canvas.fillStyle = "white";
 //    canvas.fillRect(100 ,100,100,100);
 //    canvas.fillStyle = "blue";
 //    canvas.fillRect(150,150,100,100);
 //    canvas.fillStyle = "red";
 //    canvas.fillRect(200 ,200,100,100);
 //    canvas.fillStyle = "white";
 //    canvas.fillRect(250 ,250,100,100);

};


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




// const toggleCollapse = (elementId) => {

// 	let menu = document.getElementById(`toggle${elementId}`);
// 	let togggleArrow = document.getElementById(`toggleArrow${elementId}`);

//     if (menu.style.display === "none") {
//         menu.style.display = "block";
//         togggleArrow.innerHTML = "&#9661;";
//     } else {
//         menu.style.display = "none";
//         togggleArrow.innerHTML = "&#9654;";
//     }

// };

// const showGrid = () =>{

//     if(gridShown){
//         document.getElementById("mydiv").style.backgroundImage = "none";
//         document.getElementById("mydiv").style.backgroundColor = "white";
//     }else{
//         document.getElementById("mydiv").style.backgroundImage = "linear-gradient(45deg, #d4d6d8 25%, transparent 10%), linear-gradient(-45deg, #d4d6d8 25%, transparent 10%), linear-gradient(45deg, transparent 75%, #d4d6d8 75%), linear-gradient(-45deg, transparent 75%, #d4d6d8 75%)";
//     }

//     gridShown = !gridShown;
// };

// const resetCanvas = () => {
//     canvas.clearRect(0, 0, canvasFrame.width, canvasFrame.height);
// };

// const setColor = () => {
//     currentColor = document.getElementById("currentShapeC").value;
//     console.log(currentColor);
// };




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