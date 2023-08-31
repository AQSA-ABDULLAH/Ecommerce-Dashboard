const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:String,
    quantity:Number,
    options:String
});
module.exports = mongoose.model("products",productSchema);