import React, {useState, useEffect} from 'react';
import {TextField, Typography, Paper, Grid, Avatar, IconButton} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';
import {useMediaQuery} from '@material-ui/core';
import {profilePersonalInfo} from "../../styles/styles";

const ProfilePersonalInfo = () => {
    const classes = profilePersonalInfo();
    const [editable, setEditable] = useState(true);
    const [userState, setUserState] = useState({});
    const [name, setName] = useState(userState.name);
    const [email, setEmail] = useState(userState.email);
    const [phone_number, setPhone] = useState(userState.phone_number);
    const [address, setAddress] = useState(userState.address);
    const [birth_date, setBirthday] = useState("");
    const token = sessionStorage.getItem("token");
    const theme2 = useTheme();
    const isMobile = useMediaQuery(theme2.breakpoints.down('sm'));

    useEffect(() => {

    }, [])


    useEffect(() => {
        console.log(userState);
        setName(userState.name);
        setEmail(userState.email);
        setPhone(userState.phone_number);
        setAddress(userState.address);
        setBirthday(userState.birth_date);
    }, [userState])

    const toggleEditable = (e) => {
        // setEditable(prevEditable => !prevEditable)
        if (editable) {
            setEditable(false);
            setUserState({...userState});

        } else {
            setEditable(true);
        }
    }

    const saveInfo = (e) => {
        setUserState({...userState});
        updateInfo();
        toggleEditable();
    }

    const updateInfo = () => {

    }

    const changeName = (e) => {
        setName(e.target.value, console.log(name));
        setUserState({...userState, name: e.target.value});
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
        setUserState({...userState, email: e.target.value});
    }

    const changePhone = (e) => {
        setPhone(e.target.value);
        setUserState({...userState, phone_number: e.target.value});
    }

    return (
        <>
            <div className={classes.paper}>
                <div className={classes.title}>
                    <Typography className={"lower-case"} variant="h5" color="primary" align="left">Account
                        overview</Typography>
                </div>
                <div className={classes.container}>
                    <Grid item xs={12}>
                        <Typography className="lower-case grey" variant="h6" color="primary"
                                    align="left">First Name:</Typography>
                        <TextField disabled={!editable}
                                   variant="outlined"
                                   value={name ? name : ""} align="center"
                                   placeholder="enter name..."
                                   onChange={changeName}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className="lower-case grey" variant="h6" color="primary"
                                    align="left">Last Name:</Typography>
                        <TextField disabled={!editable}
                                   variant="outlined"
                                   value={name ? name : ""} align="center"
                                   placeholder="enter name..."
                                   onChange={changeName}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className="lower-case grey" variant="h6" color="primary"
                                    align="left">Email:</Typography>
                        <TextField disabled={!editable}
                                   variant="outlined" value={email ? email : ""}
                                   placeholder="enter email..."
                                   align="left"
                                   onChange={changeEmail}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className="lower-case grey" variant="h6" color="primary"
                                    align="left">Phone:</Typography>
                        <TextField disabled={!editable}
                                   variant="outlined"
                                   value={phone_number ? phone_number : ""}
                                   placeholder="enter phone number..."
                                   align="left"
                                   type="tel"
                                   onChange={changePhone}/>
                    </Grid>
                </div>
            </div>
        </>
    )
}


export default ProfilePersonalInfo;
