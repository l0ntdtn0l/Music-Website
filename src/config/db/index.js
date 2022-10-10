const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/nguyenductoan', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log('succasc');
    } catch (error) {
        handleError(error);
    }
}

module.exports = { connect };
