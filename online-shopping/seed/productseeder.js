var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/onlineshopping');

var products = [
new Product({
	imagePath:'https://images-na.ssl-images-amazon.com/images/I/41m5GM8792L._AC_UL260_SR200,260_.jpg',
	productName: 'Leather Jacket',
	description: 'Black Leather Quilted Collarless Biker Jacket !!!',
	price: 160
}),

new Product({
	imagepath:'https://ae01.alicdn.com/kf/HTB1y8_wIVXXXXXwXXXXq6xXFXXXk/dress-with-sash-belt-short-sleeves-knee-long-vestidos-plus-size-font-b-women-b-font.jpg',
	productName: 'Leather Jacket',
	description: 'Black Leather Quilted Collarless Biker Jacket !!!',
	price: 44.5
}),


new Product({
	imagePath:'https://images-na.ssl-images-amazon.com/images/I/41m5GM8792L._AC_UL260_SR200,260_.jpg',
	productName: 'Leather Jacket',
	description: 'Black Leather Quilted Collarless Biker Jacket !!!',
	price: 160
}),

new Product({
	imagePath:'https://images-na.ssl-images-amazon.com/images/I/41m5GM8792L._AC_UL260_SR200,260_.jpg',
	productName: 'Leather Jacket',
	description: 'Black Leather Quilted Collarless Biker Jacket !!!',
	price: 160

}),

new Product({
	imagePath:'https://images-na.ssl-images-amazon.com/images/I/41m5GM8792L._AC_UL260_SR200,260_.jpg',
	productName: 'Leather Jacket',
	description: 'Black Leather Quilted Collarless Biker Jacket !!!',
	price: 160

}),


new Product({
	imagePath:'https://images-na.ssl-images-amazon.com/images/I/41m5GM8792L._AC_UL260_SR200,260_.jpg',
	productName: 'Leather Jacket',
	description: 'Black Leather Quilted Collarless Biker Jacket !!!',
	price: 160

}),


new Product({
	imagePath:'https://images-na.ssl-images-amazon.com/images/I/41m5GM8792L._AC_UL260_SR200,260_.jpg',
	productName: 'Leather Jacket',
	description: 'Black Leather Quilted Collarless Biker Jacket !!!',
	price: 160

}),

new Product({
	imagePath:'https://images-na.ssl-images-amazon.com/images/I/41m5GM8792L._AC_UL260_SR200,260_.jpg',
	productName: 'Leather Jacket',
	description: 'Black Leather Quilted Collarless Biker Jacket !!!',
	price: 160

}),

new Product({
	imagePath:'https://images-na.ssl-images-amazon.com/images/I/41m5GM8792L._AC_UL260_SR200,260_.jpg',
	productName: 'Leather Jacket',
	description: 'Black Leather Quilted Collarless Biker Jacket !!!',
	price: 160

}),

new Product({
	imagePath:'https://images-na.ssl-images-amazon.com/images/I/41m5GM8792L._AC_UL260_SR200,260_.jpg',
	productName: 'Leather Jacket',
	description: 'Black Leather Quilted Collarless Biker Jacket !!!',
	price: 160

}),
];
 var finish = 0;
for (var i= 0; i < products.length; i++) {
	products[i].save( function(err, result) {
		finish++;
		if (finish === products.length) {
			exit();

		}
	});
}

function exit() {
	mongoose.disconnect();
}