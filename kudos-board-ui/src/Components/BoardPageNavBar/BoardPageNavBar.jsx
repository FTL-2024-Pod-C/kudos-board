import React from 'react'
import { Link, useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import "./BoardPageNavBar.css";

const BoardPageNavBar = (props) => {
    return (
    <>
        <div className = "boardPageButtons">
        <Link to="/">
        <Typography align="center">
            <ArrowBackIcon />
        </Typography>
        </Link>
        <Typography align="center" onClick={props.openCardModal}>
            <AddIcon />
        </Typography>
        </div>
    </>
    )
}

export default BoardPageNavBar