const mongoose = require('mongoose');

const rexmatSchema = mongoose.Schema({
    type: { type: String, required: true },
    date: { type: String, required: true },
    data: { type: Object, require: true }
});

const Rexmat = mongoose.model('rexmat', rexmatSchema)

module.exports = Rexmat