var express = require('express');
var fss = require('graceful-fs');


var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    
  response.send(fss.readFileSync("index.html").toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

/*
var htmlfile = "index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response){
var html = fs.readFileSync(htmlfile).toString();
response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function(){
console.log("Listening on" + port);
});
*/
