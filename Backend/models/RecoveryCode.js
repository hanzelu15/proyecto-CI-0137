const { Schema, model } = require('mongoose');

const RecoverySchema = Schema({

    userID:{
        type: String,
        require: true
    },
    code:{
        type: String,
        require: true
    },

});

module.exports = model('RecoveryCode', RecoverySchema);