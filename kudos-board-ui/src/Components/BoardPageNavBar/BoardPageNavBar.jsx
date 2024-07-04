import React from 'react'
import { Link, useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./BoardPageNavBar.css";

const BoardPageNavBar = (props) => {
    return (
    <>
        <div className = "boardPageButtons">
        <Link to="/">
            <IconButton aria-label="go back">
              <ArrowBackIcon />
            </IconButton>
        </Link>
        <IconButton aria-label="add" className="addButton" onClick={props.openCardModal}>
          <AddIcon />
        </IconButton>
        </div>
    </>
    )
}

export default BoardPageNavBar