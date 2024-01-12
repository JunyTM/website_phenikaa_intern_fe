import {
  UserLogin,
  UserRegister,
  UserForgotPassword,
} from "./../../model/user";
import { APIS_URL } from "../../constants/api";
import { useCallApi } from "../../utils/apiCall";
import * as authenticate from "./authenSclice";
import { ROUTE } from "../../constants/router";
import { notify } from "../../utils/toast";
import Cookies from "js-cookie";

const login = async (
  { username, password }: UserLogin,
  navigate: any,
  dispatch: any
) => {
  dispatch(authenticate.loginPending());
  const api = APIS_URL.AUTH.login();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: { username, password },
  });
  if (!error && response.status === 200) {
    Cookies.set("AccessToken", response.data.data.access_token);
    Cookies.set("RefreshToken", response.data.data.refresh_token);
    dispatch(authenticate.loginSuccess({ ...response.data.data }));
    navigate(ROUTE.HOME.PATH);
    notify("success", "Đăng nhập thành công");
  } else {
    dispatch(authenticate.loginFail());
    notify("error", "Đăng nhập thất bại");
  }
};

const refesh = async (navigate: any, dispatch: any) => {
  dispatch(authenticate.refeshTokenPending());
  const api = APIS_URL.AUTH.refesh();
  const { response, error }: any = await useCallApi({ ...api });
  Cookies.remove("AccessToken");
  Cookies.remove("RefreshToken");
  if (!error && response.status === 200) {
    dispatch(authenticate.refeshTokenSuccess({ ...response.data.data }));
    Cookies.set("AccessToken", response.data.data.access_token);
    Cookies.set("RefreshToken", response.data.data.refresh_token);
    notify("success", "Chào mừng quay trở lại");
  } else {
    dispatch(authenticate.refeshTokenFail());
    notify("error", "Đăng nhập thất bại");
    Cookies.remove("AccessToken");
    Cookies.remove("RefreshToken");
    navigate(ROUTE.LOGIN.PATH);
  }
};

const register = async (
  UserRegister: UserRegister,
  navigate: any,
  dispatch: any
) => {
  dispatch(authenticate.isPending(true));
  const api = APIS_URL.AUTH.register();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: UserRegister,
  });
  if (!error && response.status === 200) {
    login(
      { username: UserRegister.email, password: UserRegister.password },
      navigate,
      dispatch
    );
  } else {
    dispatch(authenticate.loginFail());
    notify("error", "Đăng ký thất bại");
  }
};

const forgotPassword = async (
  { email }: UserForgotPassword,
  navigate: any,
  dispatch: any
) => {
  dispatch(authenticate.isPending(true));
  const api = APIS_URL.AUTH.forgotPassword();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: { email },
  });

  if (!error && response.status === 200) {
    notify("success", "Vui lòng kiểm tra email của bạn");
    navigate(ROUTE.LOGIN.PATH);
  } else {
    notify("error", "Email không hợp lệ");
  }
  dispatch(authenticate.isPending(false));
};

export const thunkFunctionAuth = {
  login,
  refesh,
  register,
  forgotPassword,
};
