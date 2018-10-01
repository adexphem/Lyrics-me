import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <div>
      <img 
      src={spinner}
      alt="...loading" 
      style={{display: 'block', margin: '40px auto', height: '150px', filter: 'grayscale(80%)'}} />
    </div>
  )
}

export default Spinner;
