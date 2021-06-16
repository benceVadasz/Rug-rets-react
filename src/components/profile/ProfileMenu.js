import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button, Typography, Paper, Grid, Avatar, Divider} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import HouseIcon from '@material-ui/icons/House';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ViewListIcon from '@material-ui/icons/ViewList';

const ProfileMenu = () => {

    const useStyles = makeStyles((theme) => ({
        paper: {
            alignItems: "center",
            display: "flex",
            flexFlow: "column",
            boxShadow: 'none',
            backgroundColor: '#EDEDE9',
            width: 280,
            marginTop: 40
        },
        button: {
            width: "100%",
            fontSize: "16px",
            color: "white",
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: "flex-start",
            '&:hover': {
                backgroundColor: '#EDEEF7',
            },
            marginBottom: 5,
            boxShadow: 'none',
            borderRadius: 0,
        },
        avatar: {
            width: 100,
            height: 100,
            backgroundColor: '#2D2D2D',
            marginRight: 240,
            display: 'inline-block'
        },
        link: {
            width: '100%',
            textDecoration: "none",
            textAlign: 'left',
            borderRadius: 'none'
        },
        divider: {
            margin: "5px 0 10px 0"
        },
        avatarContainer: {
            backgroundColor: 'white',
            width: '100%',
            padding: '10px 0 10px 0',
            overflow: 'hidden'
        },
        acc: {
            marginTop: 10
        },
        current: {
            textDecoration: 'underline'
        }
    }));

    const classes = useStyles();

    const location = window.location.href.split('/').pop()
    console.log(location)
    return (
        <>
            <Paper elevation={3} className={classes.paper}>
                <div className={classes.avatarContainer}>
                    <Avatar alt="pic" variant="circular" className={classes.avatar}/>
                    <Grid item xs>
                        <Typography className="lower-case" variant="h5" color="primary" align="center">Hi,
                            user</Typography>
                    </Grid>
                </div>
                <Grid item xs>
                    <Divider orientation="horizontal" className={classes.divider}/>
                </Grid>
                <NavLink activeClassName={classes.current} to="/profile/saved" className={classes.link}>
                    <Button variant="contained" size="large" className={`${classes.button} ${classes.acc} lower-case`}
                            startIcon={<FavoriteIcon fontSize="large"/>}>Saved designs</Button>
                </NavLink>
                <NavLink activeClassName={classes.current} to="/profile/orders" className={classes.link}>
                    <Button variant="contained" size="large" className={classes.button + ' lower-case'}
                            startIcon={<ViewListIcon fontSize="large"/>}>My Orders</Button>
                </NavLink>
                <NavLink activeClassName={classes.current} to="/profile/account" className={classes.link}>
                    <Button variant="contained" size="large" className={classes.button + ' lower-case'}
                            startIcon={<PersonIcon fontSize="large"/>}>Account overview</Button>
                </NavLink>
                <NavLink activeClassName={classes.current} to="/profile/address-book" className={classes.link}>
                    <Button variant="contained" size="large" className={`${classes.button} ${classes.acc}  lower-case`}
                            startIcon={<HouseIcon fontSize="large"/>}>Address book</Button>
                </NavLink>
                <NavLink activeClassName={classes.current} to="/profile/payments" className={classes.link}>
                    <Button variant="contained" size="large" className={classes.button + ' lower-case'}
                            startIcon={<CreditCardIcon fontSize="large"/>}>Payment methods</Button>
                </NavLink>
            </Paper>
        </>
    )
}

export default ProfileMenu
