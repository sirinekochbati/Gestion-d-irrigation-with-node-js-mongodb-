const mongoose = require('mongoose');
const parcelleSchema= mongoose.Schema ({
    
    NbArbre : {type: Number, required: true},
    superficie : {type: Number, required: true},
    typearbre :  {type: String, required: true},
    reseautuyauteries : [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'reseautuyauterie' 
      }],
      parcelleElementaires : [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'parcelleElementaire' 
      }]

    
}); 
module.exports = mongoose.model('parcelle', parcelleSchema);