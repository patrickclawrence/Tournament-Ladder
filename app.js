var express = require('express')
var app = express()

/*app.route('challenge')

    .get(function(req, res){
        res.send('Fetching your challenges');
    })

    .post(function(req, res){
        res.send('Posting a new challenge');
    });


*/
app.get('/', function (req, res) {
    res.sendFile('index.html', {root : __dirname + '/public/views'});
});

app.get('/bower_components/*', function(req, res){
    console.log(req.path, __dirname);
    res.sendFile(req.path, {root : __dirname});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
