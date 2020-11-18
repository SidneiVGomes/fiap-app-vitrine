const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
    category: String,
    title: String,
    message: String,
});

module.exports = mongoose.model('newsletter', newsletterSchema);
