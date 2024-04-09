const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const itemScheme = new Schema({
    itemName: {
        type: String,
        required: true
    },
    itemQuantity: {
        type: Number,
        default: 1,
        required: true
    },
    essential: {
        type: Boolean,
        default: false
    },
})

const tripSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    tripLength: {
        type: Number,
        required: true,
        default: 1,
        required: true,
    },
    tripType: {
        type: String,
    },
    items: [itemScheme],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema);