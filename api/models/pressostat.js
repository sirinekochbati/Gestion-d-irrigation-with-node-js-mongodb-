const mongoose = require('mongoose');
const pressostatSchema= mongoose.Schema ({
    
    moteur : { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'moteur' 
      }
    
}); 
module.exports = mongoose.model('pressostat', pressostatSchema);