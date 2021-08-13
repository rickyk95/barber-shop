const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/appointment', {useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true}).then(()=>{

    console.log('Connected to Mongoose')
     
})

module.exports=mongoose