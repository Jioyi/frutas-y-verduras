import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import clsx from 'clsx';
//icons
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	offset: theme.mixins.toolbar,
	appBar: {
		boxShadow: 'none',
		backgroundColor: '#37928d',
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerOpen: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		maxHeight: '100vh',
		flexShrink: 0,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: 0,
		[theme.breakpoints.up('sm')]: {
			width: 0,
		},
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	badge: {
		backgroundColor: '#fdc901',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		height: '100vh',
		overflow: 'auto',
	},
	listItemText: {
		'marginLeft': '6px',
		'fontSize': '0.9rem',
		'color': '#747f8d',
		'fontWeight': 'bold',
		'&:hover': {
			color: '#000000',
			cursor: 'pointer',
		},
	},
}));

const NavBar = ({ children }) => {
	const history = useHistory();
	const { categorys, shoppingCart } = useSelector((state) => state.global);
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const theme = useTheme();

	const handleToCart = () => {
		history.push(`/cart`);
	};

	const handleToCategory = (ID) => {
		history.push(`/${ID}`);
	};

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, { [classes.appBarShift]: open })}
			>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ display: { xs: 'none', sm: 'block' } }}
					>
						Frutas y Verduras
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
					<Box>
						<IconButton onClick={handleToCart}>
							<Badge
								badgeContent={shoppingCart.length}
								classes={{ badge: classes.badge }}
							>
								<ShoppingCartIcon />
							</Badge>
						</IconButton>
					</Box>
					
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, classes.ocult, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</div>
				<div className={classes.drawerSection}>
					<Typography component="h1" variant="h6" color="inherit">
						Categorias
					</Typography>
					<List component="nav" aria-labelledby="nested-list-subheader">
						{categorys.map(({ name, ID }) => (
							<React.Fragment key={ID}>
								<ListItem
									onClick={() => {
										handleToCategory(ID);
									}}
								>
									<ListItemText
										primary={name}
										classes={{
											primary: classes.listItemText,
										}}
									/>
								</ListItem>
							</React.Fragment>
						))}
					</List>
				</div>
			</Drawer>
			<div className={classes.content}>
				<div className={classes.offset} />
				{children}
			</div>
		</div>
	);
};

export default NavBar;
