const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: String,
    content: String,
    directory: { type: mongoose.Schema.Types.ObjectId, ref: 'Directory' }
});

module.exports = mongoose.model('File', fileSchema);
