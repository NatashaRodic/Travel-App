const User = require('../models/user');
const Trip = require('../models/trip')

module.exports = {
    index,
    new: newTrip,
    create
}

async function index(req, res) {
    const trips = await Trip.find({})
    console.log(trips)
    res.render('trips/index', { title: 'All Trips', trips });
}

function newTrip(req, res) {
    res.render('trips/new', { title: 'Create a new Trip', errorMsg: '' })
}

async function create(req, res) {
    try {
        const trips = await Trip.create(req.body)
        res.redirect(`/trips`)
    } catch (error) {
        console.log(error)
        res.render('trips/new', { errorMsg: err.message })
    }
}
