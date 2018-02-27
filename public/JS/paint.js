/*global require:false, console:false, __dirname: false, document:false, window: false, Selector: false, Canvas:false*/
// jshint esversion: 6 
/*jslint node:true*/
"use strict";

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
    canvas = new Canvas(800,600,0,0,"canvas");
    canvas.createCanvas();
    
};





 