const mongoose = require('mongoose');
const ravitaillementSchema= mongoose.Schema ({
    
    
    nomproduit : {type: String, required: true},
    quantity : {type: Number, required: true},
    date : {type: String,
        required: true, 
        match : /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
        
        },
    stationfertlization: {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'stationfertilization'
     
        }
    
}); 
module.exports = mongoose.model('ravitaillement', ravitaillementSchema);