'use strict';
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

module.exports = function(app){

	// Parse our POST and PUT bodies.
  	app.use(bodyParser.json());
  	app.use(bodyParser.urlencoded({ extended: true }));

  	let rootPath = path.join(__dirname, '../../../');
	let indexPath = path.join(rootPath, './browser/index.html');

	app.set('indexHTML', indexPath);

  	app.use(express.static(path.join(rootPath, './public')))
  	app.use(express.static(path.join(rootPath, './browser')))
  	app.use(express.static(path.join(rootPath, './node_modules')))

  	
}