const express = require("express")
const router = express.Router()

const Request = require("../models/Request")

// POST - Add request
router.post("/request-blood", async (req,res)=>{

const request = new Request(req.body)
await request.save()

res.json({message:"Blood request submitted successfully"})

})

// ✅ IMPORTANT: GET ALL REQUESTS
router.get("/requests", async (req,res)=>{

const requests = await Request.find()
res.json(requests)

})

module.exports = router