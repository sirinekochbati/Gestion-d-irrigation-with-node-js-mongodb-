const mongoose = require('mongoose');
const stationfertilizationSchema= mongoose.Schema ({
    
    
    
      

    
      parcelleElementaires : [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'parcelleElementaire' 
      }],

      ravitaillements: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ravitaillement'
  
        }],

    
}); 
module.exports = mongoose.model('stationfertilization', stationfertilizationSchema);