import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Button} from '@material-ui/core';
// import logo from '../assets/logo.png';

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
        leftNav: {
            position: "absolute",
            left: 50
        }
    }));
    const classes = useStyles();

    const logOut = () => {
        sessionStorage.clear();
        window.location.href = '/';
    }

    return (
        <div className={classes.root}>
            <AppBar className={classes.navbarStyle} position="static">
                <Toolbar>
                    <Button component={Link} to="/" color="inherit">
                        {/*<img className={classes.img} alt="complex" src={logo}/>*/}
                    </Button>
                    <Typography variant="h6" className={classes.title}/>
                    <div className={classes.navContainer}>
                        <div className={classes.leftNav}>
                            <Button className={'lower-case'} component={Link} to="/jobs" color="inherit">
                                Shop
                            </Button>
                            <Button className={'lower-case'} component={Link} to="/jobs" color="inherit">
                                Design
                            </Button>
                            <Button className={'lower-case'} component={Link} to="/jobs" color="inherit">
                                Feed
                            </Button>
                        </div>
                        {
                            sessionStorage.getItem('token') ?
                                <div className={classes.rightNav}>
                                    <Button component={Link} to="" onClick={logOut} color="inherit">
                                        Logout
                                    </Button>
                                    <IconButton
                                        component={Link}
                                        to="/profile"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        color="inherit"
                                    >
                                        <AccountCircle/>
                                    </IconButton>
                                </div>
                                :
                                <div>
                                    <Button className={'lower-case'} component={Link} to="/login" color="inherit">
                                        Login
                                    </Button>
                                    <Button className={'lower-case'} component={Link} to="/register" color="inherit">
                                        Register
                                    </Button>
                                </div>
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;