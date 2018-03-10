
class Action{

	static setWidth(targetId,value){//adjust the width of an element
		//console.log(targetId.id);
		document.getElementById(targetId).width = value;
	}

	static setHeight(targetId,value){//adjust the height of an element
		document.getElementById(targetId).height = value;
	}

	static setLeft(targetId,value){
		document.getElementById(targetId).style.left = value+"px";
	}

	static setTop(targetId, value){
		document.getElementById(targetId).style.top = value+"px";
	}

	//needs modified or moved to selector class because it is not universAL
	static toggleView(id){//show or hide a selectors contents
	 	let selectedSelector = document.getElementById(`${id}Body`);
	 	let toggleArrow = document.getElementById(`${id}Arrow`);

	     if (selectedSelector.style.display === "none") {
	         selectedSelector.style.display = "block";
	         toggleArrow.innerHTML = "&#9661;";
	     } else {
	         selectedSelector.style.display = "none";
	         toggleArrow.innerHTML = "&#9654;";
	     }
	 }

	static getValue(id){
	    return document.getElementById(id).value;
	}
}