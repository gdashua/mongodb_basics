var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,
function(err, db){
	if(err) throw err;
	var dbObj = db.db("Gamey");
//fetches the first documents from myMovie collection
	dbObj.collection("myMovies").findOne({}, function(err, result){
		if(err) throw err;
		console.log("The first document in this collection is "+result.name);
		db.close();
	}):
});
