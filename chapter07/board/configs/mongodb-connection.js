const {MongoClient}	= require('mongodb');
const url = "mongodb+srv://wjdwwidz:nodewjdwwidz@cluster0.5fd3khr.mongodb.net/board"
module.exports = function(callback){
	return MongoClient.connect(url, callback);
}