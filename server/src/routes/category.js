const { Router } = require('express');
const router = Router();
const { Category } = require('../db.js');

router.get('/', async (req, res, next) => {
	try {
		const categorys = await Category.findAll({
			attributes: ['ID', 'name', 'description'],
		});
		return res.status(200).json({
			categorys,
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
