import React from 'react';
import increase from '../assets/icons/svg/increase.svg';
import data from '../assets/icons/svg/data.svg';
import register from '../assets/icons/svg/register.svg';
import monitoring from '../assets/icons/svg/monitoring.svg';
import email from '../assets/icons/svg/email-purple.svg';
import instructions from '../assets/icons/svg/instructions.svg';
import vk from '../assets/icons/svg/vk.svg';
import facebook from '../assets/icons/svg/facebook.svg';
import Slide from 'react-reveal/Slide';

const Howitworks = () => {
  return (
    <section className="howitworks">
      <div className="container">
        <div className="howitworks-wrapper">
          <Slide bottom cascade>
            <div className="howitworks-flex secondarytext">
              <div className="howitworks-block">
                <div className="howitworks-block-image">
                  <img src={increase} className="howitworks-icon" alt="analytics" />
                </div>
                <div className="howitworks-block-text">
                  Наши аналитики ежедневно изучают действия мошенников и разные
                  проблемные ситуации (кейсы), чтобы своевременно предупредить и
                  защитить вас
                  <br />
                  <div className="howitworks-social-row">
                    <p>Подробнее:</p>
                    <img
                      src={vk}
                      className="howitworks-icon-social"
                      alt="vkontakte"
                    />
                    <img
                      src={facebook}
                      className="howitworks-icon-social"
                      alt="facebook"
                    />
                  </div>
                </div>
              </div>
              <div className="howitworks-block">
                <div className="howitworks-block-image">
                  <img src={data} className="howitworks-icon" alt="data" />
                </div>
                <div className="howitworks-block-text">
                  Для каждого кейса мы прорабатываем источники данных. Сейчас у нас 7
                  источников данных, через два месяца их будет около 100
                </div>
              </div>
              <div className="howitworks-block">
                <div className="howitworks-block-image">
                  <img src={register} className="howitworks-icon" alt="register" />
                </div>
                <div className="howitworks-block-text">
                  Вы регистрируетесь в системе и указываете ваш ИНН
                </div>
              </div>
              <div className="howitworks-block">
                <div className="howitworks-block-image">
                  <img
                    src={monitoring}
                    className="howitworks-icon"
                    alt="monitoring"
                  />
                </div>
                <div className="howitworks-block-text">
                  Система в непрерывном режиме мониторит источники данных и выявляет
                  все изменения
                </div>
              </div>
              <div className="howitworks-block">
                <div className="howitworks-block-image">
                  <img src={email} className="howitworks-icon" alt="email" />
                </div>
                <div className="howitworks-block-text">
                  Если система выявляет изменение, которое может быть потенциальной
                  проблемной ситуацией, то вам на электронную почту незамедлительно
                  приходит сообщение
                </div>
              </div>
              <div className="howitworks-block">
                <div className="howitworks-block-image">
                  <img
                    src={instructions}
                    className="howitworks-icon"
                    alt="instructions"
                  />
                </div>
                <div className="howitworks-block-text">
                  Вы заходите в MyCheck и получаете инструкцию как себя вести и что
                  делать
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export { Howitworks };
