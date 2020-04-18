var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,
function(err, db){
	if(err) throw err;
	var dbObj = db.db("Gamey");

	dbObj.collection("myMovies").findOne({}, function(err, result){
		if(err) throw err;
		console.log("The first document in this collection is "+result.name);
		db.close();
	}):
});
MongoClient.connect(url, function(err, db){
if(err) throw err;
var dbObj = db.db("Gamey"); //database intance created by this line
var query = {rating: 7}; //query to filter the and extract documents with a rating value of 7
//filters the database and extracts only documents with rating of 7
	dbObj.collection("myMovies").find(query).toArray(function(err,
		result){
		if(err) throw err;
		console.log(result);
		db.close();
	});
});
MongoClient.connect(url, function(err, db){
if(err) throw err;
var dbObj = db.db("Gamey"); //database intance created by this line
	//list only the movies field data out of the whole collection fields
	dbObj.collection("myMovies").find({}, {projection: {_movie:1,year:0,rating:0}}).toArray(function(err,
		result){
		if(err) throw err;
		console.log(result);
		db.close();
	});
});
