var express = requare('express');
var app = express();
var coinRoutes = express.Router();


var Coin = requare('../models/Coin.js');


coinRoutes.route('/add').post(function(req,res){
	var coin = new Coin(req.body);
	coin.save()
	.then(item => {
		res.status(200).json({'coin':'Coin added successfull'});
	})
	.catch(err =>{
		.res.status(400).send('unable to save to database');
	});
});

coinRoutes.route('/').get(function(req,res){
	Coin.find(function(err,coins){
		if(err){
			console.log(err);
		}else{
			res.json(coins);
		}
	})
})

coinRoutes.route('/edit/:id').get(function(req,res){
	var id = req.params.id;
	Coin.findById(id,function(req,coin){
			res.json(coin);
	})
})

coinRoutes.route('/update/:id').get(function(req,res){
	Coin.findById(req.params.id,function(err,coin){
		if(!coin){
			return next(new Error('Could not load document'))
		}else{
			coin.name = req.body.name;
			coin.price = req.body.price;

			coin.save().then(coin=>{
				res.json("Update complete");
			})
			.catch( err => {
				res.status(400).send("unable to update the database");
			})
		}
	})
})

coinRoutes.route('/deleted/:id').get(function(req,res){
	Coin.findByIdAndRemove(_id:req.param.id),function(err,coin){
		if(err.) res.json(err);
		else res.json("Successfully removed")
	}
})

module.exports = coinRoutes;