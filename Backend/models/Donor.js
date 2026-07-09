const mongoose = require("mongoose")

const donorSchema = new mongoose.Schema({

name:String,
bloodGroup:String,
phone:String,
location:String

})

module.exports = mongoose.model("Donor", donorSchema)