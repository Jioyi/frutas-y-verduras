const { v4: uuidv4 } = require('uuid');
const categorys = [
	{
		ID: uuidv4(),
		name: 'Frutas',
		description: 'descripcion de categoria Frutas',
	},
	{
		ID: uuidv4(),
		name: 'Verduras',
		description: 'descripcion de categoria Verduras',
	},
];

module.exports = categorys;
