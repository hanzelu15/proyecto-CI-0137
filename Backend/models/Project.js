const { Schema, model } = require('mongoose');

const ProjectSchema = Schema({

    name:{
        type: String,
        require: true
    },

    manager:{
        type: Schema.Types.ObjectId,
        ref: 'User'
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

module.exports = model('Project', ProjectSchema);