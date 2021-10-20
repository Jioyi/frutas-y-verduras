import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
//actions
import { removeProductToCart } from '../actions';

const SERVER_API_URL = 'http://localhost:3001';

const useStyles = makeStyles((theme) => ({
	card: {
		width: 240,
		margin: 10,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	media: {
		height: 0,
		paddingTop: '56.25%',
	},
	name: {
		color: '#000000',
		fontSize: '1.1rem',
		fontWeight: 'bold',
		padding: '0px',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
	},
	price: {
		color: '#000000',
		fontSize: '0.9rem',
		padding: '0px',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
	},
	stock: {
		color: '#000000',
		fontSize: '0.9rem',
		padding: '0px',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
	},
	center: {
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
	},
	buttonRemove: {
		'fontSize': '1.0rem',
		'backgroundColor': '#ea211e',
		'color': '#ffffff',
		'borderRadius': 4,
		'margin': '10px',
		'fontWeight': 'bold',
		'padding': '10px 20px 10px 20px',
		'white-space': 'nowrap',
		'textTransform': 'none',
		'&:hover': {
			backgroundColor: '#d50000',
			color: '#ffffff',
		},
	},
}));

const CardItem = (props) => {
	const { ID, name, image, price, quantity } = props;
	const dispatch = useDispatch();
	const classes = useStyles();

	const removeProduct = (ID) => {
		dispatch(removeProductToCart(ID));
	};

	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.media}
				image={`${SERVER_API_URL}/image/${image}`}
				alt={name}
			/>
			<CardContent>
				<Typography className={classes.name}>{name}</Typography>
				<Typography className={classes.price} color="textSecondary">
					${price} por Kg
				</Typography>
				<Typography className={classes.price} color="textSecondary">
					{quantity} Kg en el carrito
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					className={classes.buttonRemove}
					size="small"
					onClick={() => removeProduct(ID)}
				>
					Remover del carrito
				</Button>
			</CardActions>
		</Card>
	);
};
export default CardItem;
