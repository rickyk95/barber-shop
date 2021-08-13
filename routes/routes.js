const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()



router.post('/appointment',(req,res)=>{
        
        console.log(req.body)

        res.send("Appointment booked")
      
})


module.exports=router