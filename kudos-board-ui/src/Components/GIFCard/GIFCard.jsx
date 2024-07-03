import React from 'react';
import './GIFCard.css'

const GIFCard = (props) => {
    // add on click for choosing the gif
    return (
      <>
        {/* <video onClick={() => props.setChosenGif(props.imageSrc)} autoPlay loop> 
            <source src={props.imageSrc} type="video/mp4"></source>
        </video> */}
        <img className="gif" onClick={() => props.handleClick()} src={props.imageSrc}/>
      </>
    );
  };
  
  export default GIFCard;