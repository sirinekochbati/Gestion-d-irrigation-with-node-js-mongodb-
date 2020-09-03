const mongoose = require('mongoose');
const flotteurSchema= mongoose.Schema ({
   
    bassins : [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'bassin' 
      }]
    
}); 
module.exports = mongoose.model('flotteur', flotteurSchema);