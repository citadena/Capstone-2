const Product = require("../models/product")

module.exports.getProducts = () => {
	return Product.find({}).then(result => {
		return result;
	})
}

module.exports.getSpecific = (productId) => {
	return Product.findById(productId).then(result => {
		return result;
	})
}

module.exports.addProduct = (body) => {
	let newProduct = new Product({
		name: body.name,
		description: body.description,
		price: body.price,
		category: body.category,
		size: body.size
	})
	return newProduct.save().then((product, error) => {
		if(error){
			return false;
		}else{
			return true;
		}
	})	
}

module.exports.updateProduct = (productId, body) => {
	let updatedProduct = {
		name: body.name,
		description: body.description,
		price: body.price,
		category: body.category,
		size: body.size
	}
	return Product.findByIdAndUpdate(productId, updatedProduct).then((product, error) => {
		if(error){
			return false;
		}else{
			return true;
		}
	})
}

module.exports.archiveProduct = (productId, body) => {
	let archivedProduct = {
		isActive: false
	}

	return Product.findByIdAndUpdate(productId, archivedProduct).then((product, error) => {
		if(error){
			return false;
		}else{
			return true;
		}
	})
}