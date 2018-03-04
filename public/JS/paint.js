/*global require:false, console:false, __dirname: false, document:false, window: false, Selector: false, Canvas:false,dragElement:false*/
// jshint esversion: 6 
/*jslint node:true*/
"use strict";

//TODO
//make shape drawing actually work
//add color support
//add editing of shapes
//add a scripting option
//draw a square    <--- finished
//add mouse coordinats in edit window
//add zoom ability
//add gradient color support
//make it pretty   <---- finished for now
//when resizing shapes make mouse change to arrows to indicate slid movement
//change the canvas class to json support
//refractor everything atleast once
//
//multi canvas support
//add layering support
//add json ui creation <-- finished
//further improve classes
//release this!!! and make bank

let canvas;
let currentColor;
let newShapeWidth = 100;
let newShapeHeight = 100;
let shapes;

const init = () => {

    //canvas Creation
    canvas = new Canvas(600,400,0,0,"canvas");
    canvas.createCanvas();
    dragElement(document.getElementById(("canvasWindow")));

    //in the future make this work through json??  \/\/\/\/
    /* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/General Aside\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/


    Selector.createSelector({
        "title":"Drawing",
        "locationId":"generalSelector",
        "content": [{
            "header": "Shapes",
            "type": "text"
        },{
            "header": "rectangle",
            "type": "button",
            "action": "callFunction",
            "functionCall": "canvas.drawFillRect(newShapeWidth,newShapeHeight);"
        },{
            "header": "Shape Size:",
            "type": "text"
        },{
            "header": "Width:",
            "type": "textBox",
            "action": "updateVar",
            "targetVar": "newShapeWidth",
            "value": 100
        },{
            "header": "Height:",
            "type": "textBox",
            "action":"updateVar",
            "targetVar":"newShapeHeight",
            "value": 100
        },{
            "header": "Pencils",
            "type": "text"
        },{
            "header": "TextBox",
            "type": "text"
        }]
    });

    Selector.createSelector({
        "title":"Color",
        "locationId":"generalSelector",
        "content": [{
            "header":"Color:",
            "type": "text"
        },{
            "header": "ChangeColor",
            "type": "color",
            "action": "updateVar",
            "targetVar": "currentColor"
        }]
    });
        Selector.createSelector({
        "title":"Canvas",
        "locationId":"generalSelector",
        "content":[{
            "header": "Download Canvas:",
            "type": "text"
        },{
            "header": "Download",
            "type": "link",
            "targetId": "canvas",
            "action": "download",
            "link": "#"
        },{
            "header": "Canvas Size: ",
            "type": "text",
        },{
            "header":"Width:",
            "type": "textBox",
            "action": "width",
            "targetId": "canvas",
            "value": canvas.width
        },{
            "header":"Height:",
            "type": "textBox",
            "action": "height",
            "targetId": "canvas",
            "value": canvas.height
        },{
            "header":"Canvas Position:",
            "type": "text"
        },{
            "header": "Left:",
            "type": "textBox",
            "action": "setLeft",
            "targetId": "canvasWindow",
            "value": 560
        },{
            "header": "Top:",
            "type": "textBox",
            "action": "setTop",
            "targetId": "canvasWindow",
            "value": 300
        },{
            "header":"Canvas Background:",
            "type": "text"
        },{
            "header": "Change",
            "type": "button",
            "action": "callFunction",
            "functionCall": "canvas.canvasBackground();"
        }]
    });

    Selector.createSelector({
        "title":"Settings",
        "locationId":"generalSelector",
        "content": [{
            "header": "Reset Canvas:",
            "type": "text"
        },{
            "header": "reset",
            "type": "button",
            "action": "callFunction",
            "functionCall": "canvas.clearCanvas();"
        }]
    });

    Selector.createSelector({
        "title":"Properties",
        "locationId":"attributeSelector"
    });

    Selector.createSelector({
        "title":"Attributes",
        "locationId":"attributeSelector"
    });
    
};





 