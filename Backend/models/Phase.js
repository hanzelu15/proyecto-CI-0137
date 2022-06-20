const { Schema, model } = require('mongoose');

const PhaseSchema = Schema({

    name:{
        type: String,
        require: true
    },

    project:{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    location:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },

});

module.exports = model('Phase', PhaseSchema);