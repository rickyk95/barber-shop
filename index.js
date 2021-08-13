const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./routes/routes.js')
const AppointmentSchema = require('./db/models/appointments')
// require('./db/mongoose/mongoose.js')

app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log("Listening on 3000")
})

app.get('/', async (req, res) => {

    // const a1 = new AppointmentSchema({ name: 'richard' })
    // await a1.save()
    res.render('index', { layout: false })
})

