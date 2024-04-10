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
    try {
        const trip = await Trip.findById(req.params.id);
        await trip.items.findOneAndUpdate(
            { packed: false },
            { $set: { packed: true } }
        );
        await trip.save()
        return res.redirect(`/trips/${trip._id}`);
    } catch (e) {
        console.log(e.message);
        return res.redirect('/trips');
    }
}
