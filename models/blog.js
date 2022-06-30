const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    //validation
    title: {
        type: String,
        required: [
            true, "Must provide a title."
        ],
        trim: true,
        maxlength: 20
    },
    writer: {
        type: String,
        required: [
            true, "Must provide a writer."
        ],
        trim: true,
        maxlength: 10
    },
    content: {
        type: String,
        required: [
            true, "Must provide a content."
        ],
        trim: true,
        maxlength: 100
    }
});
//export
module.exports = mongoose.model('Blog', blogSchema);