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
        } else if (docs.length) {
            res.send({ success: false, error: 'Device exists' });
        } else {
            const newDevice = new Device({
                user: user,
                name: name,
                Trange: req.body.Trange,
                Hrange: req.body.Hrange,
                Irange: req.body.Irange,
                Drange: req.body.Drange,
                intro: req.body.intro,
            });
            console.log(newDevice);
            newDevice.save(error => {
                if (error) {
                    res.send({ success: false, error: 'Error' });
                } else {
                    res.send({
                        success: true,
                        message: 'Device saved successfully',
                    });
                }
            });
        }
    });
});

module.exports = router;
