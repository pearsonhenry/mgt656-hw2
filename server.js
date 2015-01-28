var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/okcaterpillar', function(request, response){
    response.send('okcaterpillar');
});

app.listen(
    process.env.PORT || 4000,
    process.env.IP || 'local host'
);