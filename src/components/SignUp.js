import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { isEmpty } from "lodash";
import { useForm } from "react-hook-form";
import { isMobile } from "react-device-detect";
import {
  registerByEmail,
  deleteCurrentAccount,
  resetUser,
} from "../redux/actionCreators";
import { ErrorMessage } from "./ErrorMessage";

function SignUpWithoutRouter({ history }) {
  const { handleSubmit, register, errors, getValues } = useForm();
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(resetUser());
  }, [dispatch]);

  const onSubmit = (formData) => {
    const newFormValues = {
      name: formData.name,
      surname: formData.surname,
      patronymic: formData.patronymic,
      email: formData.email,
      password: formData.password,
      sex: Number(formData.sex),
    };

    return dispatch(registerByEmail(newFormValues));
  };

  const handleDeleteAccount = () => {
    dispatch(deleteCurrentAccount());
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
          {!isEmpty(user) &&
            user?.data !== "A2Mailer::send" &&
            status === "ok" ? (
              <>
                <p>{`Уважаемый ${user?.passport?.name} ${user?.passport?.patronymic}!`}</p>
                <p>Вы были успешно авторизированы в системе.</p>
                <button onClick={handleDeleteAccount}>Удалить пользователя</button>
              </>
            ) : (
              <>
                {user?.status === "ok" && user?.data === "A2Mailer::send" ? (
                  <>
                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: "22px",
                        color: "black",
                      }}
                    >
                      Вам на почту была направлена ссылка для активации аккаукта
                  </p>
                    <button
                      onClick={() => {
                        history.push("/signin");
                      }}
                    >
                      Войти
                  </button>
                  </>
                ) : (
                    <>
                      <input
                        name="name"
                        placeholder="имя"
                        ref={register({
                          required: "обязательное поле",
                        })}
                      />
                      {errors.name && errors.name.message}
                      <input
                        name="surname"
                        placeholder="фамилия"
                        ref={register({
                          required: "обязательное поле",
                        })}
                      />
                      {errors.surname && errors.surname.message}
                      <input
                        name="patronymic"
                        placeholder="отчество"
                        ref={register({
                          required: "обязательное поле",
                        })}
                      />
                      {errors.patronymic && errors.patronymic.message}
                      <input
                        name="email"
                        placeholder="электронный адрес"
                        ref={register({
                          required: "обязательное поле",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Введен некорректный email",
                          },
                        })}
                      />
                      {errors.email && errors.email.message}
                      <div className="form__select-wrapper">
                        <p className="form__select-title">пол</p>
                        <select
                          className="form__select-select-wrapper"
                          name="sex"
                          ref={register}
                        >
                          <option value={2}>мужской</option>
                          <option value={1}>женский</option>
                        </select>
                      </div>
                      <input
                        name="password"
                        placeholder="пароль"
                        type="password"
                        ref={register({
                          validate: (value) =>
                            value.length >= 8 ||
                            "Длина пароля должна быть от 8 символов",
                        })}
                      />
                      {errors.password && errors.password.message}
                      <input
                        name="passwordrepeat"
                        placeholder="пароль повторно"
                        type="password"
                        ref={register({
                          validate: (value) =>
                            value === getValues().password ||
                            "Пароли должны совпадать",
                        })}
                      />
                      {errors.passwordrepeat && errors.passwordrepeat.message}
                      {user?.status === "error" && <ErrorMessage user={user} />}
                      <div
                        style={{
                          display: "flex",
                          flexFlow: isMobile ? "row wrap" : "row nowrap",
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
                            marginBottom: isMobile ? "15px" : 0,
                          }}
                          onClick={() => {
                            history.push("/signin");
                          }}
                        >
                          Есть логин и пароль?
                    </div>
                        <div>
                          <button type="submit">Зарегистрироваться</button>
                        </div>
                      </div>
                    </>
                  )}
              </>
            )}
        </form>
      </div>
    </>
  );
}

export const SignUp = withRouter(SignUpWithoutRouter);
