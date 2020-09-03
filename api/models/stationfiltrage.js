const mongoose = require('mongoose');
const stationfiltrageSchema= mongoose.Schema ({
    
    bassins : [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'bassin' 
      }]
    
}); 
module.exports = mongoose.model('stationfiltrage', stationfiltrageSchema);