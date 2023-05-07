const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//MongoDB Schema
//everything in mongoose starts witha  schema
//ch 14
const StatesSchema = new Schema({
    statecode: {
        type: String, 
        required: true,
        unique: true
    },
    funfacts: [String] 
    
});

module.exports = mongoose.model('State', StatesSchema);
