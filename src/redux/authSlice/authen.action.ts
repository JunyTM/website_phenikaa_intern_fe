import { UserRegister } from "./../../model/user";
import { FormLogin } from "./../../model/authen/formAuthen";
import { APIS_URL } from "../../constants/api";
import { useCallApi } from "../../utils/apiCall";
import { loginSuccess, loginFail } from "./authenSclice";
import { notify } from "../../utils/toast";
import Cookies from "js-cookie";

const login = async (
  { username, password }: FormLogin,
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

    localStorage.setItem("UserId", response.data.data.id);
    localStorage.setItem("UserRole", response.data.data.role);
    localStorage.setItem("username", response.data.data.username);
  }
  if (!error && response.status === 200) {
    notify("success", "Đăng nhập thành công");
    dispatch(loginSuccess({ ...response.data.data }));
    navigate("/home");
  } else {
    notify("error", "Đăng nhập thất bại");
    dispatch(loginFail());
    console.log("Dang nhap that bai");
  }
};

const register = async (
  UserRegister: UserRegister,
  navigate: any,
  dispatch: any
) => {
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
    notify("error", "Đăng ký thất bại");
    console.log("Dang ky that bai");
  }
};

export const thunkFunctionAuth = {
  login,
  register,
};
