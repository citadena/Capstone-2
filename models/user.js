const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "First name is required"]
	},
	lastName: {
		type: String,
		required: [true, "Last name is required"]
	},
	email: {
		type: String,
		required: [true, "Email is required"]
	},
	password: {
		type: String,
		required: [true, "Password is required"]
	},
	mobileNo: {
		type: String,
		required: [true, "Mobile number is required"]
	},	
	isAdmin: {
		type: Boolean,
		default: false
	},
	orders: [{
		products: [{
			productId: {
				type: String,
				required: [true, "Product ID is required"]				
			},
			quantity: {
				type: Number,
				required: [true, "Quantity is required"]	
			}
		}],
		totalAmount: {
			type: Number,
			required: [true, "Total Amount is required."]
		},
		purchasedOn: {
			type: Date,
			default: new Date()
		},
		status: {
			type: String,
			default: "Processing"
		}
	}]
})

module.exports = mongoose.model("User", userSchema)