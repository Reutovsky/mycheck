import React from 'react';
import { Button } from '../components/common/Button';
import { Tagline } from './Tagline';
import { Details } from './Details';

const NAV_LINKS = [
  { text: 'Функции', id: 1, href: '/' },
  { text: 'Решение', id: 2, href: '/' },
  { text: 'Стоимость', id: 3, href: '/' },
  { text: 'Блог', id: 4, href: '/' },
  { text: 'Контакты', id: 5, href: '/' },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo">
            <div className="header__logo-image"></div>
          </div>
          <div className="header__navlinks maintext">
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.id}>{l.text}</li>
              ))}
            </ul>
            <Button text="Защититься" clickHandler={() => console.log('gg')} />
          </div>
        </div>
        <div className="header__row">
          <div className="header__column-block">
            <Tagline />
          </div>
          <div className="header__column-block">
            <Details />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
