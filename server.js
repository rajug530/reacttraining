var express = require('express');
var app=express();
app.use(express.static('public'));
app.listen(2017,()=>{console.log('server started')});


