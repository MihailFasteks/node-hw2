var evt = require('events').EventEmitter;


function FileStream(){
}
FileStream.prototype = new evt;
FileStream.prototype.read=function(){
    console.log('File read');
}
FileStream.prototype.record=function(){
    console.log('File recorded');
}
FileStream.prototype.on('read', FileStream.prototype.read);
FileStream.prototype.on('record', FileStream.prototype.record);


module.exports.fs = FileStream;




