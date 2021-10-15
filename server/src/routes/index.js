const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
	res.json({ message: 'API frutas y verduras!' });
});

router.use('/category',require('./category'));
router.use('/product',require('./product'));

module.exports = router;