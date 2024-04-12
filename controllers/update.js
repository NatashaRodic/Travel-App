const User = require('../models/user');
const Trip = require('../models/trip')

module.exports = {
    show,
    update
}

async function show(req, res) {
    try {
        const trip = await Trip.findById(req.params.id)
        res.render('trips/update', { title: 'Trip update', trip })
    } catch (error) {
        console.log(error)
    }
}



async function update(req, res) {
    console.log("run update");
    try {
        const trip = await Trip.findById(req.params.id);
        console.log(trip);
        await trip.updateOne(req.body)
        trip.save();
        res.redirect(`/update/${trip.id}`)
    } catch (error) {
        console.log(error)
    }
}

