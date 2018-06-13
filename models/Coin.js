var mongoose = requare('mongoose');
var Schema = mongoose.Schema;


var Coin = new Schema({
	name:{
		type: String
	},
	price:{
		type: Number
	}
},{
	collection: 'coins'
});

module.export = mongoose.model('Coin', Coin);