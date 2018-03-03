/*global require:false, console:false, __dirname: false, document:false, window: false, Selector: false, Canvas:false,dragElement:false*/
// jshint esversion: 6 
/*jslint node:true*/
"use strict";

//TODO
//make shape drawing actually work
//add color support
//add editing of shapes
//add a scripting option
//multi canvas support
//add layering support
//add json ui creation <-- finished
//further improve classes
//release this!!! and make bank

let canvas;

const init = () => {

    //canvas Creation
    canvas = new Canvas(600,400,0,0,"canvas");
    canvas.createCanvas();
    dragElement(document.getElementById(("canvasWindow")));

    //in the future make this work through json??  \/\/\/\/
    /* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/General Aside\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/
    Selector.createSelector({
        "title":"General",
        "locationId":"generalSelector",
        "content":[{
            "header": "Save",
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
        "title":"Drawing",
        "locationId":"generalSelector",
        "content": [{
            "header": "Shapes",
            "type": "text"
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
        "locationId":"generalSelector"
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

    // colorSelector = new Selector("Color", "generalSelector","colorSelector");//color selector
    // colorSelector.showSelector();

    // settingsSelector = new Selector("Settings", "generalSelector","settingsSelector");//settings
    // settingsSelector.showSelector();

    // /* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/Attributes Aside\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/
    // attrShapeSelector = new Selector("Shapes", "attributeSelector","attrShapeSelector");//Shapes
    // attrShapeSelector.showSelector();

    // attributeSelector = new Selector("Attributes", "attributeSelector","attributeSelector");//attributes
    // attributeSelector.showSelector();

    
    
};





 