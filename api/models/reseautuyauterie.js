const mongoose = require('mongoose');
const reseautuyauterieSchema= mongoose.Schema ({
    
    
    pression : {type: Number, required: true},
    debit : {type: Number, required: true},
  
    parcelle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'parcelle'
 
    },
    moteur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'moteur'
 
    }
    

    
}); 
module.exports = mongoose.model('reseautuyauterie', reseautuyauterieSchema);