const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const User = require('../../models/users');
const auth = require('../../auth');

router.post('/', (req, res) => {
    const email = req.body.email;
    const password = crypto
        .createHash('sha512')
        .update(req.body.password)
        .digest('base64');
    User.findOne({ email: email, password: password }, (err, user) => {
        if (err) {
            console.log(err);
            res.send({ success: false, error: 'Error' });
        } else if (!user) {
            res.send({ success: false, error: 'No User' });
        } else {
            const token = auth.sign(user.id);
            const id = auth.verify(token).id;
            User.findById(id, (error, user) => {
                if (error) {
                    console.log(error);
                    res.send({ success: false, error: 'Token Error' });
                }
                res.send({ success: true, token: token, user: user });
            }).select('-password');
        }
    });
});

module.exports = router;
