const jwt = require('jsonwebtoken');
const secret = require('crypto')
    .randomBytes(15)
    .toString('base64');

const auth = {
    sign(id) {
        return jwt.sign(
            {
                id,
            },
            secret,
        );
    },
    verify(token) {
        return jwt.verify(token, secret);
    },
};

module.exports = auth;
