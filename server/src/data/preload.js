const { Product, Category } = require('./../db.js');
const products = require('./products.js');
const categorys = require('./categorys.js');

const preload = async () => {
	try {
		//creating Products
		const productsCreated = await Product.bulkCreate(products);
		//creating Categorys
		const CategorysCreated = await Category.bulkCreate(categorys);
		
		//assign product to a category
		await CategorysCreated[0].addProduct(productsCreated[0]);
		await CategorysCreated[0].addProduct(productsCreated[1]);
		await CategorysCreated[0].addProduct(productsCreated[2]);
		await CategorysCreated[0].addProduct(productsCreated[3]);
		await CategorysCreated[0].addProduct(productsCreated[4]);

		await CategorysCreated[1].addProduct(productsCreated[5]);
		await CategorysCreated[1].addProduct(productsCreated[6]);
		await CategorysCreated[1].addProduct(productsCreated[7]);
		await CategorysCreated[1].addProduct(productsCreated[8]);
		await CategorysCreated[1].addProduct(productsCreated[9]);


	} catch (error) {
		console.log('error', error);
	}
};

module.exports = preload;
