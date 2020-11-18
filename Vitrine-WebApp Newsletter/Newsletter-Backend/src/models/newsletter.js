const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
    establishmentName: String,
    establishmentCategory: String,
    title: String,
    message: String,
});

module.exports = mongoose.model('newsletter', newsletterSchema);
