const mongoose = require('mongoose');
const bassinSchema = mongoose.Schema ({

    capacity : {type: Number, required: true},
    min : {type: Number, required: true},
    max : {type: Number, required: true},
    historiquebassins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'historiquebassin'
 
    }],
  
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