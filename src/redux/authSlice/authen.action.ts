import {
  UserLogin,
  UserRegister,
  UserForgotPassword,
} from "./../../model/user";
import { APIS_URL } from "../../constants/api";
import { useCallApi } from "../../utils/apiCall";
import {
  loginSuccess,
  loginFail,
  loginPending,
  isPending,
} from "./authenSclice";
import { notify } from "../../utils/toast";

const login = async (
  { username, password }: UserLogin,
  navigate: any,
  dispatch: any
) => {
  dispatch(loginPending());
  const api = APIS_URL.AUTH.login();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: { username, password },
  });
  if (!error && response.status === 200) {
    dispatch(loginSuccess({ ...response.data.data }));
    navigate("/home");
    notify("success", "Đăng nhập thành công");
  } else {
    dispatch(loginFail());
    notify("error", "Đăng nhập thất bại");
  }
};

const register = async (
  UserRegister: UserRegister,
  navigate: any,
  dispatch: any
) => {
  dispatch(isPending(true));
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
    dispatch(loginFail());
    notify("error", "Đăng ký thất bại");
  }
};

const forgotPassword = async (
  { email }: UserForgotPassword,
  navigate: any,
  dispatch: any
) => {
  dispatch(isPending(true));
  const api = APIS_URL.AUTH.forgotPassword();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: { email },
  });

  if (!error && response.status === 200) {
    notify("success", "Vui lòng kiểm tra email của bạn");
    navigate("/login");
  } else {
    notify("error", "Email không hợp lệ");
  }
  dispatch(isPending(false));
};

export const thunkFunctionAuth = {
  login,
  register,
  forgotPassword,
};
