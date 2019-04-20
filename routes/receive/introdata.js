const express = require('express');
const router = express.Router();
const Device = require('../../models/devices');

router.post('/', (req, res) => {
    const user = req.body.user;
    const name = req.body.name;
    Device.findOne({ user: user, name: name }, (err, docs) => {
        if (err) {
            console.log(err);
            res.send({ success: false, error: 'Error' });
        } else if (!docs.length) {
            res.send({ success: false, error: "Device doesn't exist" });
        } else {
            res.send({ success: true, data: docs.intro });
        }
    });
});

module.exports = router;
