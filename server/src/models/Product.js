const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'Product',
		{
			ID: {
				type: DataTypes.UUID,
				primaryKey: true,
				unique: true,
			},
			name: {
				type: DataTypes.STRING,
			},
			description: {
				type: DataTypes.STRING,
			},
			price: {
				type: DataTypes.INTEGER,
			},
			image: {
				type: DataTypes.STRING,
			},
			stock: {
				type: DataTypes.INTEGER,
			},
		},
		{ timestamps: true }
	);
};
