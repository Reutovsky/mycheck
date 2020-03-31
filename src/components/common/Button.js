import React from 'react';
import cx from 'classnames';

const Button = ({ text, clickHandler, secondary, ml }) => {
  return (
    <button
      className={cx('button', { secondary: secondary }, { 'ml-20': ml })}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export { Button };
