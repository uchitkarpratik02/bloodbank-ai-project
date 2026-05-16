const express = require("express")
const router = express.Router()

const Donor = require("../models/Donor")

// ➕ Add Donor
router.post("/add-donor", async (req, res) => {

    try{
        const donor = new Donor(req.body)
        await donor.save()

        res.json({
            message: "Donor added successfully"
        })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }

})

// 📥 Get All Donors
router.get("/donors", async (req, res) => {

    try{
        const donors = await Donor.find()
        res.json(donors)
    }
    catch(err){
        res.status(500).json({error: err.message})
    }

})

// ❌ Delete Donor
router.delete("/donor/:id", async (req, res) => {

    try{
        await Donor.findByIdAndDelete(req.params.id)

        res.json({
            message: "Donor deleted successfully"
        })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }

})

// ✏️ Update Donor
router.put("/donor/:id", async (req, res) => {

    try{
        await Donor.findByIdAndUpdate(req.params.id, req.body)

        res.json({
            message: "Donor updated successfully"
        })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }

})

module.exports = router