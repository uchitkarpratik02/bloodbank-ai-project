const mongoose = require("mongoose")

const requestSchema = new mongoose.Schema({

patientName:String,
bloodGroup:String,
hospital:String,
location:String,
contact:String,
date:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Request",requestSchema)