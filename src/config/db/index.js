const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://taturo252001:NDToan2501@cluster0.g9mdinl.mongodb.net/nguyenductoan', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log('success');
    } catch (error) {
        handleError(error);
    }
}

module.exports = { connect };
