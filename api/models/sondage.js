const mongoose = require('mongoose');

const sondageSchema= mongoose.Schema ({
   
    profondeur: { type: Number, 
        required: true,   
    },
    bassin : { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'bassin' 
    }    
          
}); 
module.exports = mongoose.model('sondage', sondageSchema);