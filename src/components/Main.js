import React from 'react';
import fraudalert from '../assets/icons/svg/fraud-alert.svg';

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="main__fraud">
          <div className="main__fraud-row">
            <div className="main__fraud-rogue">
              <img
                src={fraudalert}
                style={{ width: '200px', height: '200px', opacity: '0.9' }}
                alt="fraud"
              />
            </div>
          </div>
          <div className="main__fraud-row">
            <p className="main__fraud-title secondarytext">
              <span className="medium maintext">Мошенники могут </span>{' '}
              зарегистрировать на человека компанию с долгами и осуществить иные
              незаконные действия. Люди узнают о действиях мошенников слишком поздно
              <br />
              <br />
              <span className="medium maintext">Последствия:</span> штрафы, судебные
              действия, внесение в “черные списки”
            </p>
          </div>
          <div className="main__fraud-row">
            <p className="main__fraud-decision maintext">Есть выход!</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Main };
