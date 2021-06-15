import React, {useState, useEffect} from 'react';
import {TextField, Typography, Paper, Grid, Avatar, IconButton} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import {makeStyles} from '@material-ui/core/styles';
import {useTheme} from '@material-ui/core/styles';
import {useMediaQuery} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        height: '100vh'
    },
    paper: {
        alignItems: "center",
        display: "flex",
        flexFlow: "column",
        height: '80vh',
        marginLeft: 45
    },
    avatar: {
        margin: "10px",
        width: "350px",
        height: "400px",
    },
    avatarGrid: {
        position: "relative",
    },
    uploadButton: {
        position: "absolute",
        bottom: "30px",
        left: "30px",
        color: "white",
        padding: "5px 0"
    },
    mobilePaper: {
        padding: "20px",
        margin: "15px",
        height: '100vh'
    },
    fields: {
        marginLeft: 20,
    },
    desktopFields: {
        height: 270
    },
    button: {
        marginTop: 50,
        marginLeft: 50,
    },
    input: {
        marginLeft: 40,
        marginTop: 5,
        width: 280,
        display: 'flex',
        flexFlow: 'column'
    },
    desktopInput: {
        height: 270,
    },
    mobileInput: {
        width: 270,
    },
    container: {
        height: 400,
        alignSelf: 'flex-start',
        margin: '50px 0 0 50px',
        display: 'flex',
        justifyContent: 'space-between',
        flexFlow: 'column'
    },
    title: {
        alignSelf: 'flex-start',
        margin: '50px 0 0 50px'
    },
}));


const ProfilePersonalInfo = () => {
    const classes = useStyles();
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

    const changeAddress = (e) => {
        setAddress(e.target.value);
        setUserState({...userState, address: e.target.value});
    }

    const changeBirthday = (e) => {
        setBirthday(e.target.value);
        setUserState({...userState, birth_date: e.target.value});
    }

    return (
        <>
            <Paper elevation={3} className={!isMobile ? classes.paper : classes.mobilePaper}>
                <div className={classes.title}>
                    <Typography className={"lower-case"} variant="h5" color="primary" align="left">MY
                        ACCOUNT</Typography>
                </div>
                <div className={isMobile ? '' : classes.container}>
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
            </Paper>
        </>
    )
}


export default ProfilePersonalInfo;
