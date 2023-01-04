const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3
    },
    title: {
        type: String,
        min: 3,
        require: true
    },
    desc: {
        type: String,
        min: 3,
        require: true
    },
    rating: {
        type: Number,
        require: true,
        min: 0,
        max: 5
    },
    lat: {
        type: Number,
        require: true
    },
    long: {
        type: Number,
        require: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Pin", PinSchema)