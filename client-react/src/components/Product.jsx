import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom';
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
	buttonAdd: {
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
	buttonModify: {
		'fontSize': '1.0rem',
		'backgroundColor': '#30c748',
		'color': '#ffffff',
		'borderRadius': 4,
		'margin': '10px',
		'fontWeight': 'bold',
		'padding': '10px 20px 10px 20px',
		'white-space': 'nowrap',
		'textTransform': 'none',
		'&:hover': {
			backgroundColor: '#258b3f',
			color: '#ffffff',
		},
	},
}));

const Product = (props) => {
	const { ID, name, stock, image, price, add } = props;
	const { shoppingCartList } = useSelector((state) => state.global);
	const [quantity, setQuantity] = useState(0);

	const handleAddToShoppingCart = () => {
		add(ID, name, stock, image, price, quantity);
		setQuantity(0);
	};
	const validate = (count) => {
		return parseInt(count) | 0;
	};

	const handleOnChange = (e) => {
		setQuantity(validate(e.target.value));
	};

	const classes = useStyles();
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
				<Typography className={classes.stock} color="textSecondary">
					Stock: {stock} Kg
				</Typography>
			</CardContent>
			<CardContent>
				<TextField
					className={classes.input}
					type="number"
					variant="outlined"
					value={quantity}
					onChange={handleOnChange}
					disabled={shoppingCartList.includes(ID) ? true : false}
					InputProps={{
						inputProps: {
							max: 1000,
							min: 0,
						},
						className: classes.input,
					}}
					InputLabelProps={{
						className: classes.input,
					}}
				/>
			</CardContent>
			<CardActions className={classes.center}>
				{shoppingCartList.includes(ID) ? (
					<Button
						className={classes.buttonModify}
						size="small"
						component={Link}
						to="/cart"
					>
						Modificar Pedido
					</Button>
				) : (
					<Button
						className={classes.buttonAdd}
						size="small"
						onClick={handleAddToShoppingCart}
					>
						Agregar al carrito
					</Button>
				)}
			</CardActions>
		</Card>
	);
};
export default Product;
