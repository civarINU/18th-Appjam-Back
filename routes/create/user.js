const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const User = require('../../models/users');

router.post('/', (req, res) => {
    const email = req.body.email;
    User.findOne({ email: email }, (err, docs) => {
        // if (err) {
        //     console.log(err);
        //     res.send({ success: false, error: 'Error' });
        // } else if (docs.length) {
        //     res.send({ success: false, error: 'User exists' });
        // } else {
            const newUser = new User({
                name: req.body.name,
                email: email,
                password: crypto
                    .createHash('sha512')
                    .update(req.body.password)
                    .digest('base64'),
            });
            console.log(newUser);
            newUser.save(error => {
                if (error) {
                    console.log(error);
                    res.send(400);
                } else {
                    res.send(200);
                }
            });
        // }
    });
});

module.exports = router;
