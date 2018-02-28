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
//further improve classes
//release this!!! and make bank

let generalSelector;
let shapeSelector;
let colorSelector;
let settingsSelector;

let attrShapeSelector;
let attributeSelector;

let canvas;

const init = () => {

    //canvas Creation
    canvas = new Canvas(600,400,0,0,"canvas");
    canvas.createCanvas();
    dragElement(document.getElementById(("canvasWindow")));

    //in the future make this work through json??  \/\/\/\/
    /* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/General Aside\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/
    generalSelector = new Selector("General", "generalSelector","generalSelector");//general selector
    generalSelector.showSelector();//create the selector
    generalSelector.addParagraph("Save Canvas:");
    generalSelector.addDownloadLink("download", "canvas", "download");
    generalSelector.addParagraph("Canvas Size:");
    generalSelector.addWidthTextBox("canvasWidth", canvas.id, canvas.width);
    generalSelector.addHeightTextBox("canvasHeight", canvas.id, canvas.height);

    generalSelector.addParagraph("Change Background:");
    generalSelector.addButton("Change Background", "changeBackground", "canvas.canvasBackground()");


    shapeSelector = new Selector("Shapes", "generalSelector","shapeSelector");//shape selector
    shapeSelector.showSelector();
    shapeSelector.addTableofButtons(
    {
        "header": "Shapes",
        "shapes": [
            {"shape": "rectangle"},
            {"shape": "circle"},
            {"shape": "square"},
            {"shape": "star"}
            ],
        "data":""

    }
    );

    colorSelector = new Selector("Color", "generalSelector","colorSelector");//color selector
    colorSelector.showSelector();

    settingsSelector = new Selector("Settings", "generalSelector","settingsSelector");//settings
    settingsSelector.showSelector();

    /* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/Attributes Aside\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/
    attrShapeSelector = new Selector("Shapes", "attributeSelector","attrShapeSelector");//Shapes
    attrShapeSelector.showSelector();

    attributeSelector = new Selector("Attributes", "attributeSelector","attributeSelector");//attributes
    attributeSelector.showSelector();

    //event listeners\/\/\/\/

    
    
};





 