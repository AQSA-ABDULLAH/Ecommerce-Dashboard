const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:String,
});
module.exports = mongoose.model("products",productSchema);