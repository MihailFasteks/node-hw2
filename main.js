//task1

// var evt=require('events').EventEmitter;
// var emt=new evt();

// emt.on('click', sayHello);
// emt.addListener('click', sayGoodbuy);

// emt.addListener('click', function() {console.log('eeeeeeee')});

// function sayHello(){
//     console.log("HELLO");
// }
// function sayGoodbuy(){
//     console.log('Goodbuy...');
// }

// emt.emit('click');


//task2


var file = require('./FileStream.js');

var stream = new file.fs();
stream.emit('read');
stream.emit('record');



