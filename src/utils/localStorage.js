export const setToken = token => {
  window.localStorage.setItem("token", token);
};

export const unsetToken = () => {
  window.localStorage.removeItem("token");
};

export const getToken = () => {
  if (
    typeof window != "undefined" &&
    window.localStorage.getItem("token") &&
    window.localStorage.getItem("token") !== "undefined"
  ) {
    return window.localStorage.getItem("token");
  }
  return null;
};
