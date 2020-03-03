const router = require('express').Router();

let Location = require('../models/location.model');

router.route('/').get((req, res) =>{
    Location.find()
        .then(locations => res.json(locations))
        .catch(err => res.status(400).json('Error: '+err));
    });

router.route('/add').post((req, res) => {
    const device_id = req.body.device_id;
    const time = req.body.time;
    const lat = req.body.lat;
    const lng = req.body.lng;

    const newLocation = new Location({device_id, time, lat, lng});

    newLocation.save()
        .then(()=> res.json('Location add!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;