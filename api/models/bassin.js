const mongoose = require('mongoose');
const bassinSchema = mongoose.Schema ({
    
    niveau : {type: Number, required: true},
    capacity : {type: Number, required: true},
  
    moteurs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'moteur'
 
    }],
    sondages: [{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'sondage'
 
    }],
    flotteur: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'flotteur'
 
    },
    stationfiltrage: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'stationfiltrage'
    }
    
}); 
module.exports = mongoose.model('bassin', bassinSchema);