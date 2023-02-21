const router = require("express").Router();
const User = require("../models/User");
// const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//Update user
router.put("/:id", async (req, res) => {
  let updatedUser;
  if (req.body.userId === req.params.id) {
    try {
      const CurrentuserId = req.body.userId;
      updatedUser = await User.findByIdAndUpdate(
        CurrentuserId,
        {
          $push: req.body,
        },
        { new: true }
      );

      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your account");
  }
});

// Delete User

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        // await Post.deleteMany({username: user.username}) to delete the post of user who will be deleted
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted..");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("user not found");
    }
  } else {
    res.status(401).json("You can delete only your account");
  }
});

//Get user by id

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Get all users
router.get("/", async (req, res) => {
  try {
    const allusers = await User.find();
    res.status(200).send(allusers);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
