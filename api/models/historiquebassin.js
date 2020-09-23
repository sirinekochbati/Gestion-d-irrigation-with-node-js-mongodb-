const mongoose = require('mongoose');
const historiquebassinSchema = mongoose.Schema ({

    value : {type: Number, required: true},
    date : {type: String,
        required: true, 
        match : /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
        
        },
    bassin: {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'bassin'
     
        }
    
}); 
module.exports = mongoose.model('historiquebassin', historiquebassinSchema);