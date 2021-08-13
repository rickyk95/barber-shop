const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

router.post('/appointment',(req,res)=>{   
        res.send("Appointment booked")     
})

router

module.exports=router