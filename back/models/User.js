const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
{    firstname:{type: String, required: true},
    lastname:{type: String, required: true},
    phoneNumber:{type: String, required: true, unique: true},
    cin:{type: String, required: true, unique: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    region:{type: String},
    isAdmin:{type: Number, default: 0},
    piecesId:{type: Array, default:[]}
}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);