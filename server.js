const express = require('express');
const app = express();
const http = require('http');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/defaults', function(req, res){
    res.json({
        workDuration: 2,
        breakDuration: 1
    });
});

app.listen(9080, function(){
    console.log('Listening on *:9080');
});