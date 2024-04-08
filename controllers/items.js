const Trip = require('../models/trip');

module.exports = {
    create,
}

async function create(req, res) {
    const trip = await Trip.findById(req.params.id);
    trip.items.push(req.body)
    try {
        await trip.save()
        console.log(trip)

    } catch (error) {
        console.log(error)
    }
    res.redirect(`/trips/${trip._id}`)
}
