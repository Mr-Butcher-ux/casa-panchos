const mongoose = require('mongoose');

var secretSchema = new mongoose.Schema({
    rname: {
        type: String
    },
    time: {
        type: String
    },
   
    difficulty: {
        type: String
    },
    kind: {
        type: String
    },
    comment: {
        type: String
    },
    file: {
        
        type:  String
        
    } 
});

module.exports = mongoose.model('Recipe', secretSchema);