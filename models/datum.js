const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    name: String,
    time: Number,
    temp: Number,
    humi: Number,
    illu: Number,
    dust: Number,
});
DataSchema.plugin(mongoosePaginate);

const Data = mongoose.model('DeviceData', DataSchema);
module.exports = Data;
