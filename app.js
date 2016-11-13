var express = require('express');
var app = express();
var neo4j = require('node-neo4j');
db = new neo4j('http://neo4j:cisco@localhost:7474');
var cypher = require('node-cypher');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', function (req, res) {
  db.cypherQuery("MATCH(n:Node {categoria:'Musician/Band'}) Return n;", function(err, result){
    if(err) console.log(err);

  console.log(result);
 
 	//res.send(result);

 	res.json(result);
 	res.status(200);

 	//res.status(200).json({ user: 'tobi' });

});
});

app.get('/U', function (req, res) {
  //res.send('Hello World!');
  db.cypherQuery("MATCH(n:Node {name:'Caloncho'})-[:like]->(b) Return n;", function(err, result){
    if(err) console.log(err);

  console.log(result);
 
 	res.send(result);


});
});



app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


