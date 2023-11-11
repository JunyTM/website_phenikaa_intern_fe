import { UserLogin, UserRegister } from "./../../model/user";
import { APIS_URL } from "../../constants/api";
import { useCallApi } from "../../utils/apiCall";
import { loginSuccess, loginFail } from "./authenSclice";
import Cookies from "js-cookie";

const login = async (
  { username, password }: UserLogin,
  navigate: any,
  dispatch: any
) => {
  const api = APIS_URL.AUTH.login();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: { username, password },
  });
  if (response?.data?.data?.access_token) {
    Cookies.set("AccessToken", response.data.data.access_token);
    Cookies.set("RefreshToken", response.data.data.refresh_token);
    localStorage.setItem("UserRole", response.data.data.role);
    localStorage.setItem("UserId", response.data.data.id);
    localStorage.setItem("username", response.data.data.username);
  }
  if (!error && response.status === 200) {
    dispatch(loginSuccess({ ...response.data.data }));
    navigate("/home");
  } else {
    dispatch(loginFail());
    console.log("Dang nhap that bai");
  }
};

const register = async (UserRegister: UserRegister, navigate: any, dispatch: any) => {
  const api = APIS_URL.AUTH.register();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: UserRegister,
  });
  if (!error && response.status === 200) {
    login(
      { username: UserRegister.username, password: UserRegister.password },
      navigate,
      dispatch
    );
  } else {
    console.log("Dang ky that bai");
  }
};

export const thunkFunctionAuth = {
  login,
  register,
};
