const mongoose = require('mongoose');
const moteurSchema= mongoose.Schema ({
    
    
    puissance : {type: Number, required: true},
    capacity : {type: Number, required: true},
    couplage : {
        type: String,
        enum: ["ETOILE","TRIANGLE"]
    },

    pressostat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pressostat'
 
    },
    bassin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bassin'
 
    },
    reseautuyauterie: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reseautuyauterie'
 
    }]

    
}); 
module.exports = mongoose.model('moteur', moteurSchema);