
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
	//insertMany function inserts five documents created earlier
	dbObj.collection("myMovies").insertMany(myDocs, function(err, res){
	if (err) throw err;
	console.log(res.insertedCount+"Documents inserted successfully");
	db.close();
	});
});	
