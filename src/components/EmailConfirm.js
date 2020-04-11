import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { setActivateAccount } from "../redux/actionCreators";

const EmailConfirm = (props) => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { activateAccount } = useSelector((state) => state.auth);
  const { pathname, search } = location;

  useEffect(() => {
    if (pathname && search) {
      const path = `${pathname}${search}`;
      dispatch(setActivateAccount(path));
    }
  }, [pathname, search, dispatch]);

  const renderActivateMessage = () => {
    if (
      activateAccount?.status === "ok" &&
      activateAccount?.data?.message === "email is confirmed"
    ) {
      return `Ваша почта была подтверждена. Аккаунт активирован.`;
    }
    if (
      activateAccount?.error?.code === 400 &&
      activateAccount?.error?.reason === 1
    ) {
      return `Код подтверждения не был найден :(`;
    }
    if (
      activateAccount?.error?.code === 400 &&
      activateAccount?.error?.reason === 2
    ) {
      return `ID не было найдено :(`;
    }
    if (
      activateAccount?.error?.code === 404 &&
      activateAccount?.error?.message === "confirm code is not found"
    ) {
      return `Код подтверждения не был найден :(`;
    }
    if (activateAccount?.error?.code === 502) {
      return `Внутренняя ошибка сервера`;
    }
    return `Произошла непредвиденная ошибка :(`;
  };

  const goToSignIn = () => {
    history.push("/signin");
  };

  return (
    <div>
      {renderActivateMessage()}
      <button onClick={goToSignIn}>войти в систему</button>
    </div>
  );
};

export { EmailConfirm };
