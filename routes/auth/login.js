const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const User = require('../../models/users');
const auth = require('../../auth');

router.post('/', (req, res) => {
    console.log(req.body)
    const email = req.body.email;
    const password = crypto
        .createHash('sha512')
        .update(req.body.password)
        .digest('base64');
    User.findOne({ email: email, password: password }, (err, user) => {
        if (err) {
            console.log(err);
            res.send(500);
        } else if (!user) {
            res.send(400);
        } else {
            const token = auth.sign(user.id);
            const id = auth.verify(token).id;
            User.findById(id, (error, user) => {
                if (error) {
                    console.log(error);
                    res.send(500);
                }
                res.send({ success: true, token: token, user: user });
            }).select('-password');
        }
    });
});

module.exports = router;
