import React from 'react';
import Bounce from 'react-reveal/Bounce';

const Cost = () => {
  return (
    <section className="cost">
      <div className="container">
        <div className="cost-title-wrapper">
          <p className="cost-title maintext">Стоимость</p>
          <div className="cost-title-wrapper-pig"> </div>
        </div>
        <div className="cost-row">
          <div className="cost-block">
            <p className="cost-subtitle maintext">170 ₽</p>
            <p className="cost-text secondarytext">месяц мониторинга</p>
          </div>
          <div className="cost-block">
            <p className="cost-subtitle maintext">1700 ₽</p>
            <p className="cost-text secondarytext">год мониторинга</p>
            <p className="cost-subtext">(два месяца в подарок)</p>
          </div>
        </div>
        <div className="cost-button-wrapper">
          <button className="cost__button">Защитите меня</button>
        </div>
      </div>
      <Bounce left>
        <div className="cost-wrapper-quality"></div>
      </Bounce>
      <Bounce right>
        <div className="cost-wrapper-diamond"></div>
      </Bounce>
    </section>
  );
};

export { Cost };
