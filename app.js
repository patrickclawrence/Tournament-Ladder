var express = require('express')
var app = express()
var mongo = require('mongodb');

var mongoClient = mongodb.MongoClient;

app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.route('challenge')
    .get(function(req, res){
        res.send('Fetching your challenges');
    })
    .post(function(req, res){
        res.send('Posting a new challenge');
    });

app.get('/', function (req, res) {
    res.sendFile('index.html', {root : __dirname + '/public/views'});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
