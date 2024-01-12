import { useState } from "react";
import AuthLayout from "../../../layout/authen/AuthLayout";
import {
  TextInput,
  Text,
  Button,
  Divider,
} from "@mantine/core";
import { notify } from "../../../utils/toast";
import { Link, useNavigate } from "react-router-dom";
import { UserForgotPassword } from "../../../model/user";
import { useSelector, useDispatch } from "react-redux";
import { ValidateEmail } from "../../../utils/tools";
import { thunkFunctionAuth } from "../../../redux/authSlice/authen.action";
import { ROUTE } from "../../../constants/router";

const ForgotPassword: React.FC<any> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFetching = useSelector((state: any) => state.auth.isFetching);
  const [credentials, setCredentials] = useState<UserForgotPassword>({
    email: "",
  });

  const handleSumit = (e: any) => {
    e.preventDefault();
    console.log(credentials.email.length);
    if (
      credentials.email.length === 0 ||
      ValidateEmail(credentials.email) !== null
    ) {
      notify("warning", "Vui lòng điền đầy đủ thông tin");
    } else {
      thunkFunctionAuth.forgotPassword(credentials, navigate, dispatch);
    }
  };
  return (
    <div className="max-w-[39rem] h-[40rem] m-auto">
      <Text
        className="text-left mt-16 text-5xl font-extrabold"
        size="lg"
        fw={500}
      >
        QUÊN MẬT KHẨU
      </Text>

      <Divider
        label="thông tin của bạn"
        labelPosition="center"
        className="w-[80%] my-7"
      />

      <div className="flex flex-row">
        <TextInput
          className="w-80 mr-10"
          label="Email liên kết "
          name="email"
          placeholder="20010784@phenikaa-uni ..."
          onChange={(event) =>
            setCredentials({ email: event.currentTarget.value })
          }
          error={
            credentials.email.length > 0 && ValidateEmail(credentials.email)
          }
          radius="md"
          size="lg"
          required
        />
        <Button
          className="bg-slate-500 hover:bg-slate-400 mt-7"
          onClick={handleSumit}
          w={200}
          h={49}
          style={{ transition: "background-color 0.1s ease" }}
          radius="md"
          variant="filled"
          //   color="indigo"
          loading={isFetching}
          loaderProps={{ type: "dots" }}
        >
          Gửi E-mail
        </Button>
      </div>

      <div className="absolute right-[40%] bottom-[12%] text-sm font-semibold text-gray-400">
        <p>
          Nhớ ra rồi,
          <Link to={ROUTE.LOGIN.PATH} className="hover:text-blue-500">
            {" "}
            quay lại đăng nhập!{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

const ForgotPage: React.FC<any> = () => {
  return <AuthLayout children={ForgotPassword}></AuthLayout>;
};

export default ForgotPage;
