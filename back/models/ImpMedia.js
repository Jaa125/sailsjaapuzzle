var mongoose  =  require('mongoose');  
   
var mediaSchema = new mongoose.Schema({  
    Name:{  
        type:String  
    },  
    Link:{  
        type:String  
    },  
    MediaType:{  
        type:String  
    }
   
}, {timestamps: true});

module.exports = mongoose.model('impmedia', mediaSchema);