const mongoose = require('mongoose');
const sondesaturationSchema= mongoose.Schema ({
    
    parcelleElementaire : { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'parcelleElementaire' 
      } ,
      historiquesondesaturations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'historiquesondesaturation'
 
    }]
      
    
}); 
module.exports = mongoose.model('sondesaturation', sondesaturationSchema);