const {MongoClient}	= require('mongodb');
const url = 'mongodb://localhost:27017/board';

module.exports = function(callback){
	return MongoClient.connect(url, callback);
}