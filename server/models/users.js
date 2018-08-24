const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator')

var ItemSchema = new mongoose.Schema({
name: {type: String, required: [true, "Name is required"],unique:[true,"This one already exists"] ,minlength: [3, "Name must be more that 3 charecters"], maxlength: [25, "Name must be less that 25 charecters"]},
qty: {type: Number, required: [true, "quantity is required"], minlength: [3, "quantity must be more that 3 charecters"], maxlength: [25, "quantity must be less that 25 charecters"]},
price: {type: Number, required: [true, "Price is required"], minlength: [3, "Price must be more that 3 charecters"], maxlength: [25, "Price must be less that 25 charecters"]},
compleate: {type: Boolean, default:false},
}, {timestamps: true});

ItemSchema.plugin(uniqueValidator, {type : 'mongoose-unique-validator'});
mongoose.model('Item', ItemSchema); 

