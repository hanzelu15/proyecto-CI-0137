

const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
    },
    verificate:{
        type: Boolean,
    },
    phone:{
        type: Number,
        require: false,
    },
    role:{
        type: String,
        require: true
    }
});

UserSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})
module.exports = model('User', UserSchema);