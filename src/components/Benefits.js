import React from 'react';
import idea from '../assets/icons/svg/idea.svg';
import Flip from 'react-reveal/Flip';

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-wrapper">
          <div className="benefits__row">
            <div className="benefits__row-block">
              <Flip top>
                <div className="benefits__row-idea">
                  <img src={idea} className="benefits__row-idea-image" />
                </div>
              </Flip>
            </div>
            <div className="benefits__row-block">
              <div className="benefits__row-functions secondarytext">
                <p className="benefits-title maintext">Функции myCheck</p>
                <p className="benefits-subtitle">
                  - мониторинг в режиме 24х7 источников данных и выявление всех
                  фактов, связанных с пользователем
                </p>
                <p className="benefits-subtitle">
                  - уведомления о всех выявленных фактах и возможных проблемных
                  ситуациях
                </p>
                <p className="benefits-subtitle">
                  - генерация заявлений в ФНС и полицию
                </p>
                <p className="benefits-subtitle">
                  - инструкции как себя вести в разных ситуациях
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Benefits };
