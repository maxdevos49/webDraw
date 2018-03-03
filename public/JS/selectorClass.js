/*global require:false, console:false, __dirname: false, document:false, window: false*/
/*jshint esversion: 6 */
/*jslint node: true*/
"use strict";

/**
*
*/
class Selector {

	static createSelector(data){
	
	//basic json format
 //    {
 // 	   "title":"",
 //        "locationId":"",
 //        "content":[{
 //            "header": "",
 //            "type": "",
 //            "targetId": "",
 //            "action": ""
 //        }]
 //    }

 	let parent = document.getElementById(data.locationId);

 	//title and setup
 	parent.innerHTML += `\
 	<h4 onClick="Action.toggleView('${data.title}')">\
 		<span id="${data.title}Arrow" class="toggleArrow">\
 		&#9654;\
 		</span>\
 		${data.title}\
 	</h4>\
 	<div class="selectorBody" style="display:none;" id="${data.title}Body">\
 	</div>`;

 	for(let section in data.content){

 		//let test = data.content[section];
 		//console.log(test.type);

 		switch(data.content[section].type){
 			case "button":
 				this.addButton(data,section);
 			break;
 			case "text":
 				this.addText(data,section);
 			break;
 			case "link":
 				this.addLink(data,section);
 			break;
 			case "textBox":
 				this.addTextBox(data,section);
 			break;
 			case "group":
 				this.addGroup(data,section);
 			break;
 			case "custom":
 				this.addCustom(data,section);
 			break;
 			default:
 				console.log("Invalid selector option!");
 			break;
 		}
 	}

 	
	}

	//private
	static addHeading(data, section){
		let selectorBody = document.getElementById(`${data.title}Body`);
		selectorBody.innerHTML += `<h1>${data.content[section].header}</h1>`;
	}

	//private
	static addText(data, section){
		let selectorBody = document.getElementById(`${data.title}Body`);
		selectorBody.innerHTML += `<p>${data.content[section].header}</p>`;
	}

	//private
	static addTextBox(data, section){
		let selectorBody = document.getElementById(`${data.title}Body`);
		selectorBody.innerHTML += `<p>${data.content[section].header}<input id="${data.content[section].header + data.content[section].action}" type="text" ${this.getAction(data, section)} value="${data.content[section].value}"></p>`;
	}

	//private
	static addButton(data, section){
		let selectorBody = document.getElementById(`${data.title}Body`);
		selectorBody.innerHTML += `<p><button id="${data.content[section].header}" ${this.getAction(data,section)}>${data.content[section].header}</button><p>`;
	}

	//private
	static addLink(data, section){
		let selectorBody = document.getElementById(`${data.title}Body`);
		selectorBody.innerHTML += `\
		<p>\
			<a id="${data.content[section].header}" href="${data.content[section].link}"  ${this.getAction(data,section)}>\
			${data.content[section].header}\
			</a>\
		</p>`;

	}

	//
	//

	static getAction(data,section){
		switch(data.content[section].action){
			case "download":
				return `download='webDraw.png'\
				 onclick="dataURL=document.getElementById('${data.content[section].targetId}').toDataURL();\
				 document.getElementById('${data.content[section].header}').href = dataURL;"`;

			case "width":
				return `onkeyup="Action.setWidth('${data.content[section].targetId}', document.getElementById('${data.content[section].header + data.content[section].action}').value)"`;

			case "height":
				return `onkeyup="Action.setHeight('${data.content[section].targetId}', document.getElementById('${data.content[section].header + data.content[section].action}').value)"`;

			case "callFunction":
				return `onclick="${data.content[section].functionCall}"`;

			case "setTop":
				console.log(data.content[section].targetId);
				return `onkeyup="Action.setTop('${data.content[section].targetId}', document.getElementById('${data.content[section].header + data.content[section].action}').value)"`;

			case "setLeft":
				return `onkeyup="Action.setLeft('${data.content[section].targetId}', document.getElementById('${data.content[section].header + data.content[section].action}').value)"`;

			case "scaleX":
				return "";

			case "scaleY":
				return "";

			case "none":
				return "";
			default:
				console.log("Invalid Action Type");
			break;
		}
	}


}