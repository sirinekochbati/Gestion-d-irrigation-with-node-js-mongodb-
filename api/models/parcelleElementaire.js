const mongoose = require('mongoose');

const parcelleElementaireSchema= mongoose.Schema ({
    NbArbre : {type: Number, required: true},
    superficie : {type: Number, required: true},
    typearbre :  {type: String, required: true},
  
      parcelle: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'parcelle' 
      },
      stationfertilization : { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'stationfertilization' 
      },

      electrovanne : { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'electrovanne' 
      },
      sondesaturation: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'sondesaturation' 
      },
      users: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user' 
      }],

    
}); 
module.exports = mongoose.model('parcelleElementaire', parcelleElementaireSchema);