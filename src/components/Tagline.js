import React from 'react';
import { Button } from './common/Button';

const Tagline = () => {
  return (
    <>
      <p className="header__title-maintext">Оперативно сообщим</p>
      <p className="header__title-subtext">
        если мошенники зарегистрировали на Вас фирму-однодневку и повесили долги
      </p>
      <Button text="Подробнее" secondary />
    </>
  );
};

export { Tagline };
