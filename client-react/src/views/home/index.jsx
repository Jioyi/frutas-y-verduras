import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
//components
import NavBar from '../../components/NavBar.jsx';
import Product from '../../components/Product.jsx';
//actions
import {
	getProductForCategory,
	addProduct,
} from '../../actions';

const useStyles = makeStyles((theme) => ({
	page: {
		margin: '0 auto',
		padding: theme.spacing(5),
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
}));

const Home = () => {
	const { ID } = useParams();
	const dispatch = useDispatch();
	const classes = useStyles();
	const { products } = useSelector((state) => state.global);

	const handleAddToShoppingCart = (ID, name, stock, image, price, quantity) => {
		dispatch(addProduct({ ID, name, stock, image, price, quantity }));
	};

	useEffect(() => {
		if (ID && ID !== '') {
			dispatch(getProductForCategory(ID));
		} else {
			dispatch(getProductForCategory('all'));
		}
	}, [dispatch, ID]);

	return (
		<NavBar>
			<Box className={classes.page}>
				{products.map((product) => (
					<Product
						key={product.ID}
						ID={product.ID}
						name={product.name}
						image={product.image}
						description={product.description}
						stock={product.stock}
						price={product.price}
						add={handleAddToShoppingCart}
					/>
				))}
			</Box>
		</NavBar>
	);
};

export default Home;
