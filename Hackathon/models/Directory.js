const mongoose = require('mongoose');

const directorySchema = new mongoose.Schema({
    name: String,
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Directory', default: null }
});

module.exports = mongoose.model('Directory', directorySchema);
