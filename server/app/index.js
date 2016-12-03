'use strict';

const express = require('express');
const app = express();

require('./config')(app);

module.exports = app;


app.get('/', (req, res, next)=>{
	res.sendFile(app.getValue('indexHTML'));
})