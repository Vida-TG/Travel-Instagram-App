const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register

router.post('/register', async (req, res) => {
    try{
        // Generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        // Create user, save and send
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        const user = await newUser.save();
        res.status(200).json(user.username);
    }catch(err){
        res.status(500).json(err)
    }
})

// Login


module.exports = router