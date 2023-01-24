const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 25,
        unique: true
    },
    email: {
        type: String,
        max: 55,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 6
    },
},
{
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema)