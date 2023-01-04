const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/myapp', {useNewUrlParser: true});

app.listen(8800, () => {
    console.log("Backend started");
})