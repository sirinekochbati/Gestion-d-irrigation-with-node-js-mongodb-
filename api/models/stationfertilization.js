const mongoose = require('mongoose');
const stationfertilizationSchema= mongoose.Schema ({
    
    
    quantiteproduit : {type: Number, required: true},
    nomproduit :  {type: String, required: true},
    
      parcelleElementaires : [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'parcelleElementaire' 
      }]

    
}); 
module.exports = mongoose.model('stationfertilization', stationfertilizationSchema);