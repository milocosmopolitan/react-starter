'use strict';

require('babel-register');

const app = require('./app');

app.listen(3000, function(){
	console.log('Server is listening to PORT 3000');
})