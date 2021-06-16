import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Button} from '@material-ui/core';
import {useDispatch} from "react-redux";
import {LOGOUT} from "../constants/actionTypes";
import { useHistory, useLocation } from 'react-router-dom';



const Navbar = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            background: '#F6F6F6',
            flexGrow: 1,
            marginBottom: '5px',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        navbarStyle: {
            background: '#edede9',
        },
        img: {
            width: 150,
            marginTop: 5,
        },
        navContainer: {
            position: "relative"
        },
        rightNav: {
            position: 'absolute',
            right: '3%',
            top: '50%',
            transform: 'translateY(-50%)',
        },
        leftNav: {
            display: 'flex',
            width: '40%',
            justifyContent: "space-around"
        },
        registerBtn: {
            border: '0.5px solid black'
        },
        icon: {
            color: 'black'
        }
    }));
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const logout = () => {
        dispatch({ type: LOGOUT });
        history.push('/auth');
        setUser(null);
    };

    return (
        <div className={classes.root}>
            <AppBar className={classes.navbarStyle} position="static">
                <div className={classes.navContainer}>
                    <Toolbar>
                        <Button component={Link} to="/" color="inherit">
                            {/*<img className={classes.img} alt="complex" src={logo}/>*/}
                        </Button>
                        <div className={classes.leftNav}>
                            <Button edge='start' className={'lower-case'} component={Link} to="/shop" color="inherit">
                                Shop
                            </Button>
                            <Button className={'lower-case'} component={Link} to="/design" color="inherit">
                                Design
                            </Button>
                            <Button className={'lower-case'} component={Link} to="/feed" color="inherit">
                                Feed
                            </Button>
                        </div>
                        <Typography variant="h6"/>
                        <div>

                            {
                                user?.result ?
                                    <div className={classes.rightNav}>
                                        <Button className=' lower-case' component={Link} to="" onClick={logout} color="inherit">
                                            Logout
                                        </Button>
                                        <IconButton
                                            component={Link}
                                            to="/profile/account"
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            color="inherit"
                                        >
                                            <AccountCircle className={classes.icon}/>
                                        </IconButton>
                                    </div>
                                    :
                                    <div className={classes.rightNav}>
                                        <Button className={'lower-case'} component={Link} to="/login" color="inherit">
                                            Sign in
                                        </Button>
                                        <Button className={classes.registerBtn + ' lower-case'} component={Link}
                                                to="/register" color="inherit">
                                            Sign up
                                        </Button>
                                    </div>
                            }
                        </div>
                    </Toolbar>
                </div>
            </AppBar>
        </div>
    );
}

export default Navbar;