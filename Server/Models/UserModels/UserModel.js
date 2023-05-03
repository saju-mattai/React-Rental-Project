const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    place: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: Number
    },
    status: {
        type: Boolean,
        default: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        default: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1683002646~exp=1683003246~hmac=c95a4672323d21fdca3451a0433a01163319f2daa0e08b4eec9cab9d1365a7d2'
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
