const mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
   
   
    mail: {
        type: String,
        required: true
      },
    password: {
        type: String,
        required: true
      }
});

module.exports = mongoose.model('Login', loginSchema);