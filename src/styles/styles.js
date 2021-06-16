import {makeStyles} from "@material-ui/core";

export const profileStyles = makeStyles((theme) => ({
    container: {
        padding: '20px 150px 0 120px',
        // maxWidth: "90%",
    },
    title: {
        marginTop: 10,
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 0
    },
    bg: {
        backgroundColor: '#EEEEEE',
        position: 'relative',
        height: '100vh',
    },
    grid: {
        backgroundColor: 'white',
        width: 600,
        height: '90vh',
        margin: '52px 0 0 70px'
    }
}));

export const profileMenuStyles = makeStyles((theme) => ({
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

export const profilePersonalInfo = makeStyles((theme) => ({
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