import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";
import {
  TextInput,
  PasswordInput,
  Text,
  Button,
  Divider,
  Anchor,
  Stack,
} from "@mantine/core";
import AuthLayout from "../../../layout/authen/AuthLayout";
import { UserLogin } from "../../../model/user";
import { thunkFunctionAuth } from "../../../redux/authSlice/authen.action";
import { ROUTE } from "../../../constants/router";

const LoginForm: React.FC<any> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isFetching = useSelector((state: RootState) => state.auth.isFetching);

  const [credentials, setCredentials] = useState<UserLogin>({
    username: "",
    password: "",
  });

  const handleSumit = (e: any) => {
    e.preventDefault();
    thunkFunctionAuth.login(credentials, navigate, dispatch);
  };

  return (
    <div className="w-96 m-auto">
      <div className="">
        <h1 className="mt-10 text-3xl font-bold">Chào mừng quay trở lại!</h1>
        <p className="mt-2 opacity-70 text-md font-semibold">
          Để truy cập hệ thống vui lòng
        </p>
      </div>
      <div>
        <Text
          className="text-center mt-8 text-5xl font-extrabold"
          size="lg"
          fw={500}
        >
          ĐĂNG NHẬP
        </Text>

        <Divider label="thông tin của bạn" labelPosition="center" my="lg" />

        <form id="login" name="login">
          <Stack>
            <TextInput
              label="Tên đăng nhập"
              name="username"
              placeholder="20010784@phenikaa-uni ..."
              onChange={(event) =>
                setCredentials((prev) => ({
                  ...prev,
                  username: event.target.value,
                }))
              }
              radius="md"
              required
            />

            <PasswordInput
              required
              label="Mật khẩu:"
              name="password"
              placeholder="********"
              onChange={(event) => {
                setCredentials((prev) => ({
                  ...prev,
                  password: event.target.value,
                }));
              }}
              error={
                credentials.password.length > 0 &&
                credentials.password.length <= 5 &&
                "Password should include at least 5 characters"
              }
              radius="md"
            />
          </Stack>

          <div className="flex flex-row justify-end mt-5">
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              onClick={() => {
                navigate(ROUTE.FORGOT_PASSWORD.PATH);
              }}
              size="xs"
              className="text-sm font-semibold"
            >
              Quên mật khẩu?
            </Anchor>
          </div>

          <div className="absolute right-[40%] bottom-[12%] text-sm font-semibold text-gray-400">
            <p>
              Bạn chưa có tài khoản?
              <Link to={ROUTE.REGISTER.PATH} className="hover:text-blue-500 ">
                {" "}
                Đăng ký ngay!{" "}
              </Link>
            </p>
          </div>

          <div className="mt-4 ml-7">
            <Button
              onClick={handleSumit}
              w={300}
              h={45}
              style={{ backgroundColor: "#5a67d8" }}
              radius="xl"
              variant="filled"
              color="indigo"
              loading={isFetching}
              loaderProps={{ type: "dots" }}
            >
              Đăng nhập
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const LoginPage: React.FC<any> = () => {
  return <AuthLayout children={LoginForm}></AuthLayout>;
};

export default LoginPage;
