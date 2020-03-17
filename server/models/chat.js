var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaChat = new Schema({
    name: {
        type: String,
        require: true
    },
    chat: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('chat', schemaChat)