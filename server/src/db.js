const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const config = require('./config.json');

const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	{
		logging: false,
		dialect: 'mysql',
		protocol: 'mysql',
	}
);
const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
	.filter(
		(file) =>
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, '/models', file)));
	});

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Product, Category } = sequelize.models;

Category.hasMany(Product, { as: 'products', foreignKey: 'CategoryID' });
Product.belongsTo(Category, { as: 'products', foreignKey: 'CategoryID' });

module.exports = {
	...sequelize.models,
	conn: sequelize,
};
