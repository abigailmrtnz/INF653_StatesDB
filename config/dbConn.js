const mongoose = require('mongoose');

const connectDB = async () => { //ch 13

    try {
        await mongoose.connect(process.env.DATABASE_URI, { 
            useUnifiedTopology: true,
            useNewUrLParser: true
        });

    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB;