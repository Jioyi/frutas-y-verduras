import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//components
import NavBar from '../../components/NavBar.jsx';
import CardItem from '../../components/CartItem.jsx';

const useStyles = makeStyles((theme) => ({
	page: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	button: {
		'fontSize': '1.0rem',
		'backgroundColor': '#37928d',
		'color': '#ffffff',
		'borderRadius': 4,
		'margin': '10px',
		'fontWeight': 'bold',
		'padding': '10px 20px 10px 20px',
		'white-space': 'nowrap',
		'textTransform': 'none',
		'&:hover': {
			backgroundColor: '#379210',
			color: '#ffffff',
		},
	},
}));

const Cart = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const { shoppingCart } = useSelector((state) => state.global);

	const handlePayment = () => {};

	return (
		<NavBar>
			<Box className={classes.page}>
				<Typography component="h1" variant="h5">
					Carrito
				</Typography>
				<div>
					<Button
						size="large"
						className={classes.button}
						variant="contained"
						component={Link}
						to="/"
					>
						Volver
					</Button>
					{shoppingCart.length > 0 && (
						<Button
							size="large"
							className={classes.button}
							variant="contained"
							onClick={handlePayment}
						>
							Pagar Ahora
						</Button>
					)}
				</div>
				<div>
					{shoppingCart.map((item) => (
						<CardItem key={item.ID} {...item} />
					))}
				</div>
			</Box>
		</NavBar>
	);
};

export default Cart;
