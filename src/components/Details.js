import React from 'react';
import Fade from 'react-reveal/Fade';
import { Button } from '../components/common/Button';
import clock from '../assets/icons/svg/clock.svg';
import telegram from '../assets/icons/svg/telegram.svg';
import whatsapp from '../assets/icons/svg/whatsapp.svg';
import mail from '../assets/icons/svg/mail.svg';

const Details = () => {
  return (
    <>
      <Fade>
        <div className="header__details">
          <div className="header__details-header">
            <div className="header__details-header-timewrapper">
              <img src={clock} style={{ width: 20, height: 20 }} />
            </div>
            <div className="header__details-header-textwrapper maintext">
              Итоги работы
            </div>
          </div>
          <div className="header__details-stats">
            <div className="header__details-stats-block">
              <div className="header__details-stats-title purple">40,596</div>
              <div className="header__details-stats-subtitle secondarytext">
                Нам доверяют
              </div>
            </div>
            <div className="header__details-stats-block">
              <div className="header__details-stats-title green">5,596</div>
              <div className="header__details-stats-subtitle secondarytext">
                Оповестили
              </div>
            </div>
            <div className="header__details-stats-block">
              <div className="header__details-stats-title pink">900,450 $</div>
              <div className="header__details-stats-subtitle secondarytext">
                Сэкономили
              </div>
            </div>
          </div>
          <div className="header__details-footer">
            <Button text="Первая кнопка" />
            <Button text="Вторая" secondary={true} ml={20} />
          </div>
          <div className="header__icon header__icon-telegram">
            <img src={telegram} />
          </div>
          <div className="header__icon header__icon-whatsapp">
            <img src={whatsapp} />
          </div>
          <div className="header__icon header__icon-mail">
            <img src={mail} />
          </div>
        </div>
      </Fade>
    </>
  );
};

export { Details };
