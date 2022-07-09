const { Schema, model } = require('mongoose');

const UnitSchema = Schema({

    name:{
        type: String,
        require: false
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
    },
    delivered:{
        type: Boolean,
    },
    description:{
        type: String,
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