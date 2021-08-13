const { Schema, model } = require('mongoose')

const AppointmentSchema = Schema({
    name:String,
})

const Appointment = model('Appointment',AppointmentSchema)

module.exports = Appointment