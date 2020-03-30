import React from 'react';

const Button = ({ text, clickHandler, secondary }) => {
  return (
    <button className={`${secondary ? 'button secondary' : 'button'}`} onClick={clickHandler}>
      {text}
    </button>
  );
};

export { Button };
