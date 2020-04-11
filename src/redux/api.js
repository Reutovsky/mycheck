import axios from "axios";

export const apiRegisterByEmail = (vals) =>
  axios({
    method: "post",
    url: "/api/v3/auth/email/registration",
    data: JSON.stringify(vals),
  });

export const apiLogout = () => axios({
  method: 'get',
  url: '/api/v3/auth/logout',
});

export const apiLoginByEmail = (emailAndPassword) =>
  axios({
    method: "post",
    url: "/api/v3/auth/email/login",
    data: JSON.stringify(emailAndPassword),
  });

export const apiLoginVk = () => axios.get("/api/v3/auth/vk/location");

export const apiGetCurrentUser = () =>
  axios({
    method: "get",
    url: "/api/v3/users/current",
    withCredentials: true,
  });

export const apiDeleteCurrentAccount = () => axios("/api/v3/auth/drop");

export const apiActivateAccount = (path) => axios(`/api/v3${path}`);
