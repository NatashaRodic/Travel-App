const User = require('../models/user');
const Trip = require('../models/trip')

module.exports = {
    index,
    new: newTrip,
    create,
    show,
    delete: deleteTrip,
    update

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

async function deleteTrip(req, res) {
    try {
        const trip = await Trip.findOneAndDelete({ '_id': req.params.id, 'user': req.user._id });
        if (!trip) {
            return res.status(404).send("Trip not found or you don't have permission to delete it.");
        }
        res.redirect(`/trips`);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

async function update(req, res) {
    //---console.log(req.body);
    const trip = await Trip.findById(req.params.id)
    console.log("I'm updating YOUR TRIP");
    //console.log(req.body);
    console.log(req.params);
    res.render(`trips/update`, { title: 'Update Trip', trip })
}

