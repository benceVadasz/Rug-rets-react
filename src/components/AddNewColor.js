import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {useDispatch} from "react-redux";
import {colorExists, uploadColor} from "../actions/colors";


const AddNewColor = () => {
    const MySwal = withReactContent(Swal);
    const dispatch = useDispatch();
    const useStyles = makeStyles(() => ({
        color: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            height: 70,
            borderRadius: 5,
            border: '1px solid black',
            cursor: 'pointer',
            marginBottom: 30
        },
        icon: {
            width: 40,
            height: 40
        }
    }));
    const classes = useStyles();
    const userId = JSON.parse(localStorage.getItem('profile')).result._id;


    const addNewColor = () => {
        MySwal.fire({
            title: 'Add new Color',
            input: 'text',
            inputValue: '#',
            inputAttributes: {
                autocapitalize: 'off',
            },
            confirmButtonText: 'Add',
            showCancelButton: true,
        }).then((hexCode) => {
            const RegExp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
            if (hexCode?.value?.length > 0 && !RegExp.test(hexCode.value)) {
                Swal.fire({
                    title: 'Hex code invalid',
                    confirmButtonText: 'Ok',
                }).then(() => addNewColor())
            } else {
                if (hexCode?.value?.length > 0) {
                    dispatch(colorExists({value: hexCode.value}))
                        .then((res) => {
                            if (res.data.matches.length === 0) {
                                dispatch(uploadColor({"name": "", "value": hexCode.value, userId}))
                            }
                            else {
                                Swal.fire({
                                    title: 'Color already exists',
                                    confirmButtonText: 'Ok',
                                }).then(() => addNewColor())
                            }
                        });

                }
            }
        })
        // if (loading)
//     return (
//         <div className={classes.load}>
//             <Loading/>
//         </div>
//     );
    }
    return (
        <div title="Add new color" className={classes.color} onClick={addNewColor}>
            <AddIcon className={classes.icon}/>
        </div>
    );
}

export default AddNewColor;