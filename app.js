const express = require ('express');
var compression = require ('compression');
const app = express ();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser= require('body-parser');
const mongoose= require ('mongoose');
require('dotenv').config();
mongoose.connect('mongodb+srv://node-shop:' + 
process.env.MONGO_ATLAS_PW +
 '@cluster0.pww42.mongodb.net/shopping?retryWrites=true&w=majority',
 {
     //useMongoClient: true
     useNewUrlParser: true, // new parameters
    useUnifiedTopology: true
     
     
 }
 );
app.use(cors());
app.use(compression());
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization "
    );
    if (req.method === 'OPTIONS')
    {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
const historiquesondesaturationRoutes = require('./api/routes/historiquesondesaturation');
const historiquebassinRoutes = require('./api/routes/historiquebassin');
const ravitaillementRoutes = require('./api/routes/ravitaillement');
const parcelleRoutes = require('./api/routes/parcelle');
const moteurRoutes = require('./api/routes/moteur');
const flotteurRoutes = require('./api/routes/flotteur');
const userRoutes = require ('./api/routes/user');
const bassinRoutes = require ('./api/routes/bassin');
const electrovanneRoutes = require ('./api/routes/electrovanne');
const pressostatRoutes = require ('./api/routes/pressostat');
const reseautuyauterieRoutes = require ('./api/routes/reseautuyauterie');
const sondageRoutes = require ('./api/routes/sondage');
const sondesaturationRoutes = require ('./api/routes/sondesaturation');
const stationfertilizationRoutes = require ('./api/routes/stationfertilization');
const stationfiltrageRoutes = require ('./api/routes/stationfiltrage');
const parcelleElementaireRoutes = require('./api/routes/parcelleElementaire');



app.use(morgan('dev'));


//routes which should handle requests
app.use('/ravitaillement', ravitaillementRoutes);
app.use('/historiquebassin', historiquebassinRoutes);
app.use('/historiquesondesaturation', historiquesondesaturationRoutes);
app.use('/electrovanne', electrovanneRoutes);
app.use('/stationfiltrage', stationfiltrageRoutes);
app.use('/stationfertilization', stationfertilizationRoutes);
app.use('/sondesaturation', sondesaturationRoutes);
app.use('/sondage', sondageRoutes);
app.use('/reseautuyauterie', reseautuyauterieRoutes);
app.use('/pressostat', pressostatRoutes);
app.use('/parcelle', parcelleRoutes);
app.use('/moteur', moteurRoutes);
app.use('/flotteur', flotteurRoutes);
app.use('/bassin',bassinRoutes);
app.use('/parcelleElementaire',parcelleElementaireRoutes);
app.use('/sondage',sondageRoutes);


app.use ('/user', userRoutes);
app.use((req, res, next) =>{
    const error = new Error('Not found');
    error.status= 404 ;
    next(error);
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message : error.message

        }
    });
    

});


module.exports= app ;