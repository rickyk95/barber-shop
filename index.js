const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')


app.set('view engine','handlebars')
app.engine('handlebars',exphbs())

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'public')))


app.listen(3000,()=>{

    console.log("Listening on 3000")
})


app.get('/',(req,res)=>{

    res.render('index',{layout:false})
})

