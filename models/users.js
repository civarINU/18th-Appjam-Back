const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
});
UserSchema.plugin(mongoosePaginate);

const User = mongoose.model('User', UserSchema);
module.exports = User;
