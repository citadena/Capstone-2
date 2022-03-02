const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Product name is required."]
	},
	description: {
		type: String,
		required: [true, "Product description is required."]
	},
	price: {
		type: Number,
		required: [true, "Price is required."]
	},
	category: {
		type: String,
		required: [true, "Category is required."]		
	},
	size: {
		type: String,
		required: [true, "Size is required."]		
	},
	isActive: {
		type: Boolean,
		default: true
	},
	createdOn: {
		type: Date,
		default: new Date()
	}
})

module.exports = mongoose.model("Product", productSchema)