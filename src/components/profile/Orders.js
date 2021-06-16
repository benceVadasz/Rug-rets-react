import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useTheme} from '@material-ui/core/styles';
import {useMediaQuery} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "20px",
        margin: "20px",
        alignItems: "center",
        background: "#eceef7",
        height: "100%",
        marginBottom: 77
    },
    favBox: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around",
        background: "#eceef7",
    },
    load: {position: 'fixed', top: "50%", left: "60%", transform: "translate(-50%, -50%)"},
    mobileLoad: {position: 'fixed', top: "50%", left: "50%", transform: "translate(-50%, -50%)"},
    label: {
        marginBottom: 50
    }
}));


const Orders = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    console.log('orders')

    useEffect(() => {
    }, []);

    // if (loading)
    //     return (
    //         // <div style={!isMobile ? classes.load : classes.mobileLoad}>
    //         //     <Loading/>
    //         // </div>
    //     );

    return (
        <h1>Orders</h1>
    )
}

export default Orders;
