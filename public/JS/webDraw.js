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
//multi canvas support
//add layering support
//add json ui creation <-- finished
//further improve classes

let canvas = [];
let currentColor = "blue";
let newShapeWidth = 100;
let newShapeHeight = 100;
let shapes;

const init = () => {

    //canvas Creation
    canvas[0] = {
        "title": "Canvas",
        "locationId": "canvasContainer",
        "width": 100,
        "height": 100,
        "draggable": true,
        "background": false
        //"events": ["onmousemove","onmouseover","onmousedown"]
    }

    Canvas.createCanvas(canvas[0]);
    
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
            "functionCall": "Canvas.drawFillRect(canvas[0], newShapeWidth,newShapeHeight);"
        },{
            "header": "circle",
            "type": "button",
            "action": "none"
        },{
            "header": "Star",
            "type": "button",
            "action": "none"
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
            "targetId": "Canvas",
            "action": "download",
            "link": "#"
        },{
            "header": "Canvas Size: ",
            "type": "text",
        },{
            "header":"Width:",
            "type": "textBox",
            "action": "width",
            "targetId": "Canvas",
            "value": 100
        },{
            "header":"Height:",
            "type": "textBox",
            "action": "height",
            "targetId": "Canvas",
            "value": 100
        },{
            "header":"Canvas Position:",
            "type": "text"
        },{
            "header": "Left:",
            "type": "textBox",
            "action": "setLeft",
            "targetId": "CanvasWindow",
            "value": 560
        },{
            "header": "Top:",
            "type": "textBox",
            "action": "setTop",
            "targetId": "CanvasWindow",
            "value": 300
        },{
            "header":"Canvas Background:",
            "type": "text"
        },{
            "header": "Change",
            "type": "button",
            "action": "callFunction",
            "functionCall": "Canvas.canvasBackground(canvas[0]);"
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
            "functionCall": "Canvas.clearCanvas(canvas[0]);"
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

    Selector.createSelector({
        "title":"Masons Test",
        "locationId":"attributeSelector",
        "content":[{
            "header":"Redraw face!",
            "type":"button",
            "action":"callFunction",
            "functionCall":"var test = document.getElementById('Canvas');\
            var context = test.getContext('2d');\
            context.fillStyle=currentColor;\
            context.fillRect(50,50,50,50);\
            context.fillRect(500,50,50,50);\
            context.fillRect(300,175,50,50);\
            context.fillRect(50,300,500,50);"
        }]
    })
    
};





 