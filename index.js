//dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//import routes
const productRoutes = require("./routes/product")
const userRoutes = require("./routes/user")

//database connection
mongoose.connect("mongodb+srv://admin:admin@testdatabase1.ig8ew.mongodb.net/ecommerce_api?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

mongoose.connection.once('open', () => console.log("Now connected to MongoDB Atlas."))

//server setup
app.use(express.json())
app.use(express.urlencoded({
	extended: true
}))

//add imported routes
app.use("/products", productRoutes);
app.use("/users", userRoutes);

const port = 4000

app.listen(process.env.PORT || port, () => {
	console.log(`Server running on port ${port}`)
})




