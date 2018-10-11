const mongoose = require('mongoose');
const dbURI = 'mongodb://fkxxl:fkxxl@localhost:27017/fkxxl';
// 'mongodb://user:pass@localhost:port,anotherhost:port,yetanother:port/mydatabase';

const mgPromise = mongoose.connect(dbURI, {
	useMongoClient: true,
});
mgPromise.then((db) => {
	// console.log('good', db);
})
// mongoose.connection.on('connected', function () {
// 	console.log('Mongoose connected to ' + dbURI);
// });

// mongoose.connection.on('error',function (err) {
// 	console.log('Mongoose connection error: ' + err);
// });

// mongoose.connection.on('disconnected', function () {
// 	console.log('Mongoose disconnected');
// });

// mongoose.set('debug', true);


// var CounterSchema = mongoose.Schema({
// _id: {type: String, required: true},
// seq: { type: Number, default: 0 }
// });
// var counter = mongoose.model('counter', CounterSchema);
//
//
//
// var entitySchema = mongoose.Schema({
// 		todoName: {type: String, required: true},
// 		update: {type: Date, default: Date.now()},
// 		itemDone: {type: String},
// testvalue: {type: String}
// });
//
// entitySchema.pre('save', function(next) {
// var doc = this;
// counter.findByIdAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} }, function(error, counter) {
// if(error)
// return next(error);
// doc.testvalue = counter.seq;
// next();
// });
// });
//
// var todo = mongoose.model('Todo', entitySchema);


var CounterSchema = new mongoose.Schema({
	_id: {type: String, required: true},
	seq: { type: Number}
});
var counter = mongoose.model('counter', CounterSchema);

var todoSchema = new mongoose.Schema({
	todoName: {type: String, required: true},
	update: {type: Date, default: Date.now()},
	itemDone: {type: String},
	caoId: {type: String}
});


todoSchema.pre('save', function(next) {
	var doc = this;
	counter.findByIdAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} }, function(error, counter) {
		if(error){
			console.log(error)
			return next(error);
		}
		console.log(counter);
		// doc.caoId = counter.seq;
		next();
	});
});


var cao = mongoose.model('Todo', todoSchema);
