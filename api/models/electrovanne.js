const mongoose = require('mongoose');
const electrovanneSchema= mongoose.Schema ({
    
    parcelleElementaire : { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'parcelleElementaire' 
      }
    
}); 
module.exports = mongoose.model('electrovanne', electrovanneSchema);