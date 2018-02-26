/*global require:false, console:false, __dirname: false*/
// jshint esversion: 6 
"use strict";
//Paint server for testing

//require server components
const express = require('express');
const app = express();
const server = require('http').Server(app);
const ip = require('ip');


//let the server listen on port 80
server.listen(8080);

//tell console the server is running
console.log(`Paint Server Started!! IP is ${ip.address()} `);

//tell where to find page depended info. css/javascript/images/audio/and other stuff
app.use(express.static('public'));

//do this on a connection from the client
app.get('/', (req, res) => {

  //respond with this for the client
    res.sendFile(__dirname + '/index.html');
    console.log("Connection!");

});

app.get('/index.html', (req, res) => {

  //respond with this for the client
    res.sendFile(__dirname + '/index.html');
    console.log("Connection!");


});