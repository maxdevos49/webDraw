/*global require:false, console:false, __dirname: false, document:false, window: false, Selector: false, Canvas:false*/
// jshint esversion: 6 
/*jslint node:true*/
"use strict";

class updateElement{

	static width(targetId,value){
		console.log(targetId.id);
		let element = document.getElementById(targetId.id);
		console.log(element);
		element.width = value;
	}

	static height(targetId,value){
		let element = document.getElementById(targetId);
		element.height = value;
	}
}