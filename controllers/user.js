const User = require("../models/user");
const Product = require("../models/product");
const bcrypt = require("bcrypt")
const auth = require("../auth")

module.exports.checkEmail = (body) => {
	return User.find({email: body.email}).then(result => {
		if(result.length > 0){
			return true;
		}else{
			return false;
		}
	})
}

module.exports.register = (body) => {

	let newUser = new User({
		firstName: body.firstName,
		lastName: body.lastName,
		email: body.email,
		password: bcrypt.hashSync(body.password, 10),
		mobileNo: body.mobileNo
	})

	return newUser.save().then((user, error) => {
		if(error){
			return false;
		}else{
			return true;
		}
	})	
}

module.exports.login = (body) => {
	return User.findOne({email: body.email}).then(result => {
		if(result === null){
			return false;
		}else{
			const isPasswordCorrect = bcrypt.compareSync(body.password, result.password)
			if(isPasswordCorrect){
				return {accessToken: auth.createAccessToken(result.toObject())}
			}else{
				return false
			}
		}
	})
}

module.exports.getProfile = (userId) => {
	return User.findById(userId).then(result => {
		result.password = undefined
		return result
	})
}

module.exports.checkout = async (userId, body) => {
	let userSaveStatus = await User.findById(userId).then(user => {
		user.orders.push({products: body.products, totalAmount: body.totalAmount})
		return user.save().then((user, error) => {
			if(error){
				return false;
			}else{
				return true;
			}
		})
	})
	if(userSaveStatus){
		return true;
	}else{
		return false;
	}
}