import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { isEmpty } from "lodash";
import { Divider } from "antd";
import {
  getVkRedirectLocation,
  deleteCurrentAccount,
  loginByEmail,
} from "../redux/actionCreators";
import vk from "../assets/icons/passport/vk.svg";
import gmail from "../assets/icons/passport/gmail.svg";
import facebook from "../assets/icons/passport/facebook.svg";
import twitter from "../assets/icons/passport/twitter.svg";

function SignIn() {
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();
  const { user, status } = useSelector((state) => state.auth);
  const location = user?.data?.location ?? "";
  const redirectStatus = user?.status ?? "";

  console.log(history);
  const dispatch = useDispatch();

  useEffect(() => {
    if (location && redirectStatus) {
      console.log("from sign in", location);
      window.location.href = location;
    }
  }, [location, redirectStatus, history]);

  const onSubmit = async (emailAndPassword) => {
    dispatch(loginByEmail(emailAndPassword));
  };

  const handleLoginVk = () => {
    dispatch(getVkRedirectLocation());
  };

  const handleDeleteAccount = () => {
    dispatch(deleteCurrentAccount());
  };

  const renderMessage = () => {
    if (
      user?.error?.code === 404 &&
      user?.error?.message === "user not found"
    ) {
      return `Пользователь не найден`;
    }
    if (user?.error?.code === 403 && user?.error?.reason === 1) {
      return `Почта не подтверждена`;
    }
    if (user?.error?.code === 403 && user?.error?.reason === 2) {
      return `Пользователь заблокирован`;
    }
    if (user?.error?.code === 502) {
      return `Внутренняя ошибка сервера`;
    }
  };

  return (
    <>
      <div className="sign-wrapper">
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
          {!isEmpty(user) && status === "ok" ? (
            <>
              {/* <p>{`Уважаемый ${user?.passport?.name} ${user?.passport?.patronymic}!`}</p> */}
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "black",
                }}
              >
                Вы были успешно авторизированы в системе.
              </p>
              <button onClick={handleDeleteAccount}>Удалить пользователя</button>
            </>
          ) : (
              <>
                <input
                  name="email"
                  placeholder="электронный адрес"
                  ref={register({
                    required: "Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Введен некорректный email",
                    },
                  })}
                />
                {errors.email && errors.email.message}
                <input
                  name="password"
                  placeholder="пароль"
                  type="password"
                  ref={register({
                    validate: (value) =>
                      value.length >= 8 || "Длина пароля должна быть от 8 символов",
                  })}
                />
                {errors.password && errors.password.message}
                {user?.status === "error" && <p>{renderMessage()}</p>}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      color: "black",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                    onClick={() => {
                      history.push("/signup");
                    }}
                  >
                    Не зарегистрированы?
                </div>
                  <div style={{ color: "black" }}>
                    <button type="submit">Войти</button>
                  </div>
                </div>
                <Divider
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#eee",
                    marginTop: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#191919",
                    fontSize: "12px",
                    marginBottom: "0px",
                  }}
                >
                  Войти с помощью:
              </p>
                <StyledVkButton onClick={() => handleLoginVk()} />
                <StyledTwitterButton />
                <StyledGmailButton />
                <StyledFacebookButton />
              </>
            )}
        </form>
      </div>
    </>
  );
}

export { SignIn };

export const StyledErrorText = styled.span``;

export const StyledVkButton = styled.div`
  background-image: url(${vk});
  background-size: 30px;
  background-position: center center;
  background-repeat: no-repeat;
  transition: color 0.2s, fill 0.2s, stroke 0.2s;
  margin-top: 8px;
  width: 30px;
  height: 30px;
  color: #fff;
  display: inline-block;
  cursor: pointer;
`;

export const StyledFacebookButton = styled.div`
  background-image: url(${facebook});
  background-size: 23px;
  background-position: center center;
  background-repeat: no-repeat;
  transition: color 0.2s, fill 0.2s, stroke 0.2s;
  margin-top: 8px;
  margin-left: 10px;
  width: 30px;
  height: 30px;
  color: #fff;
  display: inline-block;
`;

export const StyledTwitterButton = styled.div`
  background-image: url(${twitter});
  background-size: 25px;
  background-position: center center;
  background-repeat: no-repeat;
  transition: color 0.2s, fill 0.2s, stroke 0.2s;
  margin-top: 8px;
  width: 30px;
  height: 30px;
  color: #fff;
  display: inline-block;
  margin-left: 10px;
`;

export const StyledGmailButton = styled.div`
  background-image: url(${gmail});
  background-size: 25px;
  background-position: center center;
  background-repeat: no-repeat;
  transition: color 0.2s, fill 0.2s, stroke 0.2s;
  margin-top: 8px;
  width: 30px;
  height: 30px;
  color: #fff;
  display: inline-block;
  margin-left: 10px;
`;
