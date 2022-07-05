const { Schema, model } = require('mongoose');

const UnitSchema = Schema({

    name:{
        type: String,
        require: true
    },
    number:{
        type: String,
        require: true
    },

    phase:{
        type: Schema.Types.ObjectId,
        ref: 'Phase'
    },
    finished:{
        type: Boolean,
        require: true
    },
    delivered:{
        type: Boolean,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    files: {
        fileOne: { type: String},
        fileTwo: { type: String},
        fileThree: { type: String},
        fileFour: { type: String},
        fileFive: { type: String},
    },
    lasEdit:{ type: Date, default: Date.now }

});

module.exports = model('Unit', UnitSchema);