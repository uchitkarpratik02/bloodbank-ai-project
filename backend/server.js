const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const donorRoutes = require("./routes/donorRoutes")
const requestRoutes = require("./routes/requestRoutes")
const authRoutes = require("./routes/authRoutes")

const app = express()

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use("/api", donorRoutes)
app.use("/api", requestRoutes)
app.use("/api", authRoutes)

// database connect
mongoose.connect("mongodb://127.0.0.1:27017/bloodbank")

.then(()=>{

console.log("MongoDB Connected")

})

.catch((err)=>{

console.log(err)

})

// test route
app.get("/", (req,res)=>{

res.send("Blood Bank API Running")

})

// dynamic PORT for deployment
const PORT = process.env.PORT || 5000

// server start
app.listen(PORT, ()=>{

console.log(`Server running on port ${PORT}`)

})