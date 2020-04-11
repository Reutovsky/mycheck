import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actionCreators';

const LoggedIn = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [isShowingLogout, setIsShowingLogout] = useState(false);

  const toggleShow = () => {
    setIsShowingLogout(!isShowingLogout);
  }

  return (
    <div className="header__loggedin-wrapper">
      <p className="header__username">{user?.passport?.name ?? 'Пользователь'}</p>
      <div className="header__avatar" onClick={toggleShow}></div>
      {isShowingLogout && (
        <div className="header__logout-wrapper" onClick={() => { dispatch(logout()) }}>
          <span>Выйти</span>
        </div>
      )}
    </div>
  )
}

export { LoggedIn }
