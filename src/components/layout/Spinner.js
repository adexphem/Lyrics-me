import React from 'react';
import spinner from './spinner.gif';

const Spinner = (props) => {
  return (
    <div>
      <img 
      src={spinner}
      alt="...loading" 
      style={{display: 'block', margin: '40px auto', height: props.imgHeight, filter: 'grayscale(80%)'}} />
    </div>
  )
}

export default Spinner;
