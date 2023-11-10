import Cookies from "js-cookie";

export const HEADERS = {
  header: () => ({
    accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
  }),

  headerToken: () => ({
    accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
    authorization: `Bearer ${Cookies.get("AccessToken")}`,
  }),
};

export const APIS_URL = {
  AUTH: {
    login: () => ({
      endPoint: "/login",
      method: "post",
      headers: HEADERS.header(),
    }),

    logout: () => ({
      endPoint: "/logout",
      method: "POST",
      headers: HEADERS.headerToken(),
    }),

    refesh: () => ({
      enpoint: "/refresh",
      method: "POST",
      headers: HEADERS.header(),
    }),

    register: () => ({
      endPoint: "/users/register",
      method: "POST",
      headers: HEADERS.header(),
    }),
  },

  USER: {
    reset: () => ({
      endPoint: "/users/reset-password",
      method: "POST",
      headers: HEADERS.header(),
    }),

    update: () => ({
      endPoint: "/users/change-password",
      method: "PUT",
      headers: HEADERS.headerToken(),
    }),
  },

  ADVANCE: {
    filter: () => ({
      endPoint: "/advance-filter",
      method: "POST",
      headers: HEADERS.headerToken(),
    }),
  },

  BASIC: {
    upsert: () => ({
      endPoint: "/basic-query",
      method: "POST",
      headers: HEADERS.headerToken(),
    }),

    delete: () => ({
      endPoint: "/basic-query",
      method: "DELETE",
      headers: HEADERS.headerToken(),
    }),
  },
};
