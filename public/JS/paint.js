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

let canvas;

const init = () => {

    //in the future make this work through json??  \/\/\/\/
    /* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/General Aside\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/
    generalSelector = new Selector("General", "generalSelector","generalSelector");//general selector
    generalSelector.showSelector();


    // generalSelector.addParagraph("This is a paragragh");
    // generalSelector.addTextBox("testInput");
    // generalSelector.addButton("This is a button", "testButton");
    

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


    //canvas test
    canvas = new Canvas(400,400,0,0,"canvas");
    canvas.createCanvas();
    






 //    dragElement(document.getElementById(("mydiv")));




};











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