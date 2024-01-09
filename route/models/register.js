const mongoose = require('mongoose');

var registerSchema = new mongoose.Schema({
    fnam: {
        type: String
    },
    lnam: {
        type: String
    },
   
    mail: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('Register', registerSchema);
