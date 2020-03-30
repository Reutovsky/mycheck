import React from 'react';
import { Button } from '../components/common/Button';
import clock from '../assets/icons/svg/clock.svg';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

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
          <div className="header__navlinks">
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
            <HeadShake>
              <p className="header__title-maintext">Оперативно сообщим,</p>
            </HeadShake>
            <p className="header__title-subtext">
              если мошенники зарегистрировали на Вас фирму-однодневку и повесили
              долги
            </p>
          </div>
          <div className="header__column-block">
            <Fade>
              <div className="header__details">
                <div className="header__details-header">
                  <div className="header__details-header-timewrapper">
                    <img src={clock} style={{ width: 20, height: 20 }} />
                  </div>
                  <div className="header__details-header-textwrapper">
                    Итоги работы
                  </div>
                </div>
                <div className="header__details-stats">
                  <div className="header__details-stats-block">
                    <div className="header__details-stats-title purple">40,596</div>
                    <div className="header__details-stats-subtitle">
                      Нам доверяют
                    </div>
                  </div>
                  <div className="header__details-stats-block">
                    <div className="header__details-stats-title green">5,596</div>
                    <div className="header__details-stats-subtitle">Оповестили</div>
                  </div>
                  <div className="header__details-stats-block">
                    <div className="header__details-stats-title pink">900,450 $</div>
                    <div className="header__details-stats-subtitle">Сэкономили</div>
                  </div>
                </div>
                <div className="header__details-footer">
                  <Button text="Первая кнопка" />
                  <Button text="Вторая" secondary={true} />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
