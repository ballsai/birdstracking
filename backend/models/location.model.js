const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    device_id: { type: String},
    time:{ type: String},
    lat:{ type: String},
    lng:{ type: String}
    },{
        versionKey: false
    });

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;