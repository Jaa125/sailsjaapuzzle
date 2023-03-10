const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt')
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


//REGISTER
router.post("/register", async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phoneNumber: req.body.phoneNumber,
        cin: req.body.cin,
        // region:req.body.region,
        email: req.body.email,
        password: hashedPass
      });
  
      const user = await newUser.save();
      console.log("user", user)
   

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });

//login user
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ phoneNumber: req.body.phoneNumber });
     
      !user && res.status(400).json("Wrong credentials! pls check your name") 
      console.log("ress", user)
      const validated = await bcrypt.compare(req.body.password, user.password);
      !validated && res.status(400).json("Wrong credentials! pls check your password");


  
      const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin
        },
        process.env.JWT_SEC,
            {expiresIn:"29d"}
        );
      const { password, ...others } = user._doc;
      res.status(200).json({...others, accessToken});
    } catch (err) {
      res.status(500).json(err);
    }   
  });

module.exports = router