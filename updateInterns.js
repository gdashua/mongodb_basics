var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db){
if(err) throw err;
var dbObj = db.db("myMovies");
var query = {movie: "The Banker" };//this takes the program to the document with a movie value of 'The Banker'
var newMovie ={$set: {movie:"Money Heist S4", year:"2020", rating:9}};//this species the document that will replace the document defined by the query

  //updateOne option overides the queried document by replacing it with the newMovie document
dbObj.collection("myMovies").updateOne(query,newMovie, function(err, res){
if(err) throw err;
console.log("1 document successfully inserted");// prints the result of operation
db.close();
});
});
