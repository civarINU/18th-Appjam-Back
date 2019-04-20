const express = require('express');
const router = express.Router();
const Data = require('../../models/datum');

router.post('/', (req, res) => {
    const name = req.body.name;
    Data.findOne({ name: name }, (err, ignore) => {
        if (err) {
            console.log(err);
            res.send({ success: false, error: 'Error' });
        } else {
            const newData = new Data({
                name: name,
                time: new Date().getTime(),
                temp: req.body.temp,
                humi: req.body.humi,
                illu: req.body.illu,
                dust: req.body.dust,
            });
            console.log(newData);
            newData.save(error => {
                if (error) {
                    res.send({ success: false, error: 'Error' });
                } else {
                    res.send({
                        success: true,
                        message: 'Data saved successfully',
                    });
                }
            });
        }
    });
});

module.exports = router;
