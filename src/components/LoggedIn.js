import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actionCreators';

const LoggedIn = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isShowingLogout, setIsShowingLogout] = useState(false);

  const toggleShow = () => {
    setIsShowingLogout(!isShowingLogout);
  }

  const renderDropdown = () => {
    if (isShowingLogout) {
      return (
        <div className="header__dropdown-wrapper">
          <div className="header__dropdown-row" onClick={() => { history.push('/profile') }}>
            <p className="header__dropdown-text">Настройки</p>
            <div className="header__dropdown-icon-settings"></div>
          </div>
          <div className="header__dropdown-row" onClick={() => { dispatch(logout()) }}>
            <p className="header__dropdown-text">Выйти</p>
            <div className="header__dropdown-icon-logout"></div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="header__loggedin-wrapper">
      <p className="header__username">{user?.passport?.name ?? 'Пользователь'}</p>
      <div className="header__avatar" onClick={toggleShow}></div>
      {renderDropdown()}
    </div>
  )
}

export { LoggedIn }
