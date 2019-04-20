const express = require('express');
const router = express.Router();
const Data = require('../../models/datum');

router.post('/', (req, res) => {
    const name = req.body.name;
    Data.find({ name: name }, (err, docs) => {
        if (err) {
            console.log(err);
            res.send({ success: false, error: 'Error' });
        } else if (!docs.length) {
            res.send({ success: false, error: "Data doesn't exist" });
        } else {
            res.send({ success: true, data: docs });
        }
    })
        .sort({ _id: -1 })
        .limit(10);
});

module.exports = router;
