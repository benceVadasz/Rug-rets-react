import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button, Typography, Paper, Grid, Avatar, Divider} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import HouseIcon from '@material-ui/icons/House';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ViewListIcon from '@material-ui/icons/ViewList';
import {profileMenuStyles} from "../../styles/styles";

const ProfileMenu = () => {

    const classes = profileMenuStyles();

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
