const Trip = require('../models/trip');

module.exports = {
    create,
    update
}

async function create(req, res) {
    req.body.essential = !!req.body.essential;
    req.body.packed = !!req.body.packed;
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

async function update(req, res) {
    //---console.log(req.body);
    console.log("I'm updating");
    //console.log(req.body);
    console.log(req.params);

    const trip = await Trip.findById(req.params.tripId); // find the trip
    if (!trip) {
        console.log('No trip found with that given id');
    }
    const item = await trip.items.id(req.params.itemId);
    console.log(trip);
    item.packed = !item.packed;
    //This works
    // item.packed = true;
    try {
        await trip.save()
    }
    catch (e) {
        console.log(e.message);
        return res.redirect('/trips');
    }
    res.redirect(`/trips/${trip._id}`);
}
