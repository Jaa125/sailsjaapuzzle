const router = require("express").Router();
const Regi = require("../models/Region");
const {verifyTokenAndAdmin,authenticateToken} = require("./verifyToken");


//Get region
router.get("/",verifyTokenAndAdmin, async (req, res) => {
   await  res.status(200).send('success');

    // try{
    //     const reg = await Regi.find()
    //     res.status(200).send('success');
    // }catch(err) {
    //     res.status(500).json(err)
    // }
})


module.exports = router