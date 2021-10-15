const { Router } = require('express');
const router = Router();
const { Product, Category } = require('../db.js');

router.get('/:ID', async (req, res, next) => {
	try {
		const { ID } = req.params;

		if (ID && ID !== '') {
			const category = await Category.findOne({
				where: { ID },
				attributes: ['ID'],
				include: [
					{
						model: Product,
						as: 'products',
					},
				],
			});
			return res.status(200).json({
				products: category?.products ? category.products : [],
			});
		} else {
			const products = await Product.findAll({
				attributes: ['ID', 'name', 'description', 'price', 'image', 'stock'],
			});
			return res.status(200).json({
				products: products,
			});
		}
	} catch (error) {
		next(error);
	}
});

router.get('/forID/:ID', async (req, res, next) => {
	try {
		const { ID } = req.params;
		if (ID && ID !== '') {
			const product = await Product.findOne({
				where: { ID },
				attributes: ['ID', 'name', 'description', 'price', 'image', 'stock'],
			});
			return res.status(200).json({
				product: product,
			});
		} else {
			return res.status(404);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
