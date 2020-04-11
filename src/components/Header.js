import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Tagline } from './Tagline';
import { Details } from './Details';
import { LoggedIn } from './LoggedIn';

const NAV_LINKS = [
  { text: 'Наша платформа', id: 1, href: '/' },
  { text: 'Решения', id: 2, href: '/' },
  { text: 'Тарифы', id: 3, href: '/' },
];

const Header = () => {
  const history = useHistory();
  const { user, status } = useSelector(state => state.auth);

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo">
            <div className="header__logo-image"></div>
          </div>
          <div className="header__navlinks maintext">
            <div>
              <ul>
                {NAV_LINKS.map((l) => (
                  <li key={l.id}>{l.text}</li>
                ))}
              </ul>
            </div>
            {user?.passport && status === 'ok' ? (
              <LoggedIn />
            ) : (
                <Button
                  text="Войти"
                  clickHandler={
                    () => {
                      history.push('/signin')
                    }
                  }
                />
              )}
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
