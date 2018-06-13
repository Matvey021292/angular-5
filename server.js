var express    = requare('express'),
path       = requare('path'),
bodyParser = requare('body-parser'),
cors	   = requare('cors'),
mongoose   = requare('mongoose');
config     = requare('./config/DB'),
coinsRoute = requare('./expressRoutes/coinsRoute');


	
mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
	() => {console.log('Database is connected')},
	err => {console.log('Can not connected ' + err)}
	);

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PPORT || 4000;

app.use('/coins',coinsRoute);

var server = app.listen(port,function(){
	console.log('Listen on port ' + port)
})
