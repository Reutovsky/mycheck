import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { isEmpty, isNull } from 'lodash';
import styled from 'styled-components';
import { getAccountStatus, changeSettings } from '../redux/actionCreators';

const Profile = () => {
  const [isShowingEvents, setIsShowingEvents] = useState(false);
  const { handleSubmit, register, errors, getValues } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { accountStatus } = useSelector(state => state.accountStatus);
  const { user, status } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getAccountStatus());
  }, []);

  const handleShowEvents = () => {
    setIsShowingEvents(true);
  }

  const handleHideEvents = () => {
    setIsShowingEvents(false);
  }

  const onSubmit = async values => {
    const data = {
      inn: +values.inn,
      notifications: [
        {
          type: 'email',
          value: values.email,
        }
      ],
    }
    await dispatch(changeSettings(data));
    dispatch(getAccountStatus());
  }

  const renderData = () => {
    if (isShowingEvents) {
      return <div>События</div>
    }

    if (!isShowingEvents) {
      if (typeof accountStatus?.data?.status !== 'number' || !accountStatus?.data?.status) {
        return <div>Ошибка( Статус Вашего аккаунта не определн</div>
      }
      if (typeof accountStatus?.data?.status === 'number' && accountStatus?.data?.status === 1) {
        return (
          <>
            <p className="profile__form-support-text">
              Для начала работы системы укажите Ваш ИНН, именно по нему мы сможем собрать по Вам
              всю информацию в ЕГРЮЛ и других источниках
            </p>
            <div className="profile__form-row">
              <p className="profile__form-input-label">Введите ваш ИНН</p>
              <div className="profile__form-input-wrapper">
                <input
                  type="number"
                  name="inn"
                  ref={register({
                    required: "обязательное поле",
                    validate:
                      value => String(value).length >= 10 && String(value).length <= 12
                        || 'Количество знаков в ИНН от 10 до 12'
                  })}
                />
                <span style={{ color: 'red' }}>{errors.inn && errors.inn.message}</span>
              </div>
            </div>
            <p className="profile__form-support-text">
              <b>Внимание</b>: изменить ИНН вы сможете только через обращение в службу поддержки
              {` `}
              <u>support@my-check.ru</u>
            </p>
            <p className="profile__form-support-text">
              Подробнее об этом вы можете почитать в нашей инструкции [<u>подробнее</u>]
            </p>
            <div className="profile__form-row">
              <p className="profile__form-input-label">Введите ваш email</p>
              <div className="profile__form-input-wrapper">
                <input
                  type="text"
                  name="email"
                  ref={register({
                    required: "Обязательно поле",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Введен некорректный email",
                    },
                  })}
                />
                <span style={{ color: 'red' }}>{errors.email && errors.email.message}</span>
              </div>
            </div>
            <p className="profile__form-support-text">
              На этот email мы будем присылать уведомления
            </p>
            <div className="form__submit-wrapper">
              <button type="submit" style={{ display: 'block' }}>Сохранить</button>
            </div>
          </>
        )
      }
      if (typeof accountStatus?.data?.status === 'number' && accountStatus?.data?.status === 2) {
        return (
          <>
            <p className="profile__form-support-text">
              Ваш ИНН: {accountStatus?.data?.person?.inn}
            </p>
            <p className="profile__form-support-text">
              {typeof accountStatus?.data?.events === 'number' &&
                String(accountStatus?.data?.events).length >= 0
                ? (
                  <>
                    <span>
                      {`myCheck нашел ${accountStatus?.data?.events} событий с Вашим ИНН`}
                    </span>
                    <br /><br />
                    <span>
                      Чтобы посмотреть все события и получать уведомления о новых событиях
                      выберите и оплатите тариф
                    </span>
                  </>
                ) : (
                  <>
                    <span>myCheck не нашел событий с Вашим ИНН</span>
                    <p>Поздравляем, на сегодняшний день вам не о чем волноваться!</p>
                    <p>
                      После оплаты тарифа myCheck будет круглосуточно стоять на страже вашей
                      безопасности и незамедлительно уведомит вас о любых событиях
                    </p>
                    <p>
                      Мы постоянно добавляем новые источники информации. Подпишитесь на наши
                      сообщества в социальных сетях, чтобы получать самую актуальную информацию
                      (ссылки на соц. сети)
                    </p>
                  </>
                )}
            </p>
            <div className="profile__form-payment-wrapper">
              Информация о способах оплаты
            </div>
            <div className="profile__form-payment-row">
              <div className="profile__form-igor-avatar"></div>
              <div className="profile__form-text">
                <div>
                  <b>Если у Вас возникли вопросы:</b>
                </div>
                <ul>
                  <li>support@my-check.ru</li>
                  <li>telegram: @igor_tegia</li>
                  <li>vk: https://vk.com/id406932594</li>
                </ul>
              </div>
            </div>
          </>
        )
      }
      if (typeof accountStatus?.data?.status === 'number' && accountStatus?.data?.status === 3) {
        return (
          <div>status: 3</div>
        )
      }
    }
  }

  return (
    <>
      <div className="profile-wrapper">
        <p
          style={{
            marginBottom: "10px",
            fontSize: "20px",
            textTransform: "uppercase",
            color: "#240049",
            textAlign: 'center',
            cursor: 'pointer',
          }}
          onClick={() => history.push('/')}
        >
          MyCheck
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="profile__header-wrapper">
            <div className="profile__header-row">
              <div className="profile__header-settings-events">
                <button
                  className="profile__header-button-events"
                  disabled={accountStatus?.data?.status !== 3}
                  onClick={
                    accountStatus?.data?.status === 3
                      ? () => { handleShowEvents() }
                      : () => { }
                  }
                >
                  События
                </button>
                <button
                  className="profile__header-button-settings"
                  onClick={
                    accountStatus?.data?.status === 3 && isShowingEvents
                      ? () => { handleHideEvents() }
                      : () => { }
                  }
                >
                  Настройки
                </button>
              </div>
              <div className="profile__header-icon-user"></div>
            </div>
          </div>
          <div className="profile__header-divider-horizontal"></div>
          <div className="profile__window-wrapper">
            {renderData()}
          </div>
        </form>
      </div>
    </>
  );
}

export { Profile };
