const User = require('../models/user');
const Trip = require('../models/trip')

module.exports = {
    index,
    new: newTrip
}

async function index(req, res) {
    const trips = await Trip.find({})
    console.log(trips)
    res.render('trips/index', { title: 'All Trips', trips });
}

function newTrip(req, res) {
    res.render('trips/new', { title: 'Create a new Trip', errorMsg: '' })
}
