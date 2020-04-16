var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db){
if(err) throw err;
var dbObj = db.db("myMovies");
var query = {movie: "The Banker" };
var newMovie ={$set: {movie:"Money Heist S4", year:"2020", rating:9}};

dbObj.collection("myMovies").updateOne(query,newMovie, function(err, res){
if(err) throw err;
console.log("1 document successfully inserted");
db.close();
});
});