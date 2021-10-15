const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'Category',
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
		},
		{ timestamps: true }
	);
};
