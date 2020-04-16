
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db){
if(err) throw err;
var dbObj = db.db("Gamey"); //database intance created by this line
	
//an array of documents/objects to be inserted into myMovies collection
var myDocs = [{movie:"The Banker",year:"2020",rating:8},
	  		  {movie:"Bad Boys",year:"2020",rating:7},
	  		  {movie:"The Hunt",year:"2020",rating:7},
	  		  {movie:"Bloodshot",year:"2020",rating:7.5},
	  		  {movie:"First Cow",year:"2020",rating:6.5}
	  		  
];
var query = {rating: 7}; //query to filter the and extract documents with a rating value of 7
	//insertMany function inserts five documents created earlier
	dbObj.collection("myMovies").insertMany(myDocs, function(err, res){
	if (err) throw err;
	console.log(res.insertedCount+"Documents inserted successfully");
	db.close();
	});
	//filters the database and extracts only documents with rating of 7
	dbObj.collection("myMovies").find(query).toArray(function(err,
		result){
		if(err) throw err;
		console.log(result);
		db.close();
	});
	//list only the movies field data out of the whole collection fields
	dbObj.collection("myMovies").find({}, {projection: {_movie:1,year:0,rating:0}}).toArray(function(err,
		result){
		if(err) throw err;
		console.log(result);
		db.close();
	});
});
