const { Schema, model } = require('mongoose');

const ExtraSchema = Schema({

    name:{
        type: String,
        require: false
    },
    type:{
        type: String,
        require: true
    },
    status:{
        type: String,
    },
    unit:{
        type: Schema.Types.ObjectId,
        ref: 'Phase'
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

module.exports = model('Extra', ExtraSchema);