const User = require('../models/user');
const Trip = require('../models/trip')

module.exports = {
    index,
    new: newTrip,
    create,
    show
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
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    try {
        const trip = await Trip.create(req.body)
        res.redirect(`/trips/${trip._id}`)
    } catch (error) {
        console.log(error)
        res.render('trips/new', { errorMsg: err.message })
    }
}

async function show(req, res) {
    try {
        const trip = await Trip.findById(req.params.id)
        res.render('trips/show', { title: 'Trip Details', trip })
    } catch (error) {
        console.log(error)
    }
}
