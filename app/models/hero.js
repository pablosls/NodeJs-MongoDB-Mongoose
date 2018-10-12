const connection = require("app/database/connection/mongo");

const { Schema } = connection.mongoose;

const HeroSchema = new Schema({
    name: {
        type: String
    }, 
    alias: {
        type: String
    }, 
    superPowers: { 
        type: Array
    }, 
}, {collection: 'Heroes'});

module.exports = connection.model('Hero', HeroSchema);