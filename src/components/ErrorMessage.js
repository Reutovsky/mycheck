import React from "react";
import styled from "styled-components";

const ErrorMessage = ({ user }) => {
  const renderMessage = () => {
    if (
      user?.error?.code === 200 &&
      user?.error?.message === "email is registered" &&
      user?.error?.reason === 1
    ) {
      return "Пользователь с указанным email уже зарегистрирован";
    }
    if (
      user?.error?.code === 502 &&
      user?.error?.message === "internal server error"
    ) {
      return `Внутренняя ошиька сервера`;
    }
    if (user?.error?.code === 400 && typeof user?.error?.reason === "number") {
      return `${user?.error?.message}`;
    }
    return "Ошибка регистрации";
  };

  return (
    <StyledErrorWrapper>
      <StyledMessage>{renderMessage()}</StyledMessage>
    </StyledErrorWrapper>
  );
};

export { ErrorMessage };

const StyledErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 15px;
  margin-bottom: 10px;
`;

const StyledMessage = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: red;
  padding: 0;
  margin: 0;
`;
