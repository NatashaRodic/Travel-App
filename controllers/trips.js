const User = require('../models/user');
const Trip = require('../models/trip')

module.exports = {
    index
}



async function index(req, res) {
    const trips = await Trip.find({})
    console.log(trips)
    res.render('trips/index', { title: 'All Trips', trips });
}