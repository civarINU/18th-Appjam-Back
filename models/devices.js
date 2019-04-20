const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const DeviceSchema = new Schema({
    user: String,
    name: String,
    Trange: [Number, Number],
    Hrange: [Number, Number],
    Irange: [Number, Number],
    Drange: [Number, Number],
    intro: String,
});
DeviceSchema.plugin(mongoosePaginate);

const Device = mongoose.model('Device', DeviceSchema);
module.exports = Device;
