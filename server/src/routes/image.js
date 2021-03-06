const { Router } = require('express');
const router = Router();
const fs = require('fs');
const path = require('path');

router.get('/:image', async (req, res, next) => {
	try {
		
		const { image } = req.params;
		const extension = image.substring(image.lastIndexOf('.') + 1).toLowerCase();
		fs.readFile(path.join(__dirname, `/../images/${image}`), (err, content) => {
			if (err) {
				res.writeHead(400, { 'Content-type': 'text/html' });
				res.end('No such image!');
			} else {
				res.writeHead(200, { 'Content-type': `image/${extension}` });
				res.end(content);
			}
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
