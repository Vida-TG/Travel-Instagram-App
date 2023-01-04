const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const pinRoute = require("./routes/pins");
const app = express();

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}).then(()=>{
    console.log("MONGO Connected");
}).catch((err)=>{
    console.log(err);
});

app.use("/api/pins", pinRoute);

app.listen(8800, () => {
    console.log("Backend started");
})