const mongoose = require('mongoose');
const historiquesondesaturationSchema = mongoose.Schema ({

    niveauhumiditesol: {type: Number, required: true},
    date : {type: String,
        required: true, 
        match : /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
        
        },
    sondesaturation: {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'sondesaturation'
     
        }
    
}); 
module.exports = mongoose.model('historiquesondesaturation', historiquesondesaturationSchema);