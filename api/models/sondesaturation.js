const mongoose = require('mongoose');
const sondesaturationSchema= mongoose.Schema ({
    
    parcelleElementaire : { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'parcelleElementaire' 
      } // 
    
}); 
module.exports = mongoose.model('sondesaturation', sondesaturationSchema);