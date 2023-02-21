const mongoose = require("mongoose");

const RegionSchema = new mongoose.Schema(
{    name:{type: String},
    
}, {timestamps: true});

module.exports = mongoose.model("region", RegionSchema);