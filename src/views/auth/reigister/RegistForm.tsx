import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TextInput,
  PasswordInput,
  Text,
  Group,
  Button,
  Divider,
  Anchor,
  Stack,
} from "@mantine/core";
import AuthLayout from "../../../layout/authen/AuthLayout";

const RegistForm: React.FC<any> = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSumit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <Text
          className="text-center mt-16 text-5xl font-extrabold"
          size="lg"
          fw={500}
        >
          ĐĂNG KÝ
        </Text>

        <Divider
          label="thông tin của bạn"
          labelPosition="center"
          className="w-[50%] m-auto my-7"
        />

        <form id="login" name="login">
          <div className="mx-20">
            <div className="flex flex-row">
              <TextInput
                className="w-72 mr-10"
                label="Họ và tên"
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
              <TextInput
                className="w-60"
                label="Mã sinh viên"
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
            </div>

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
          </div>

          <div className="absolute right-[40%] bottom-[12%] text-xs font-medium">
            <p>
              Bạn đã có tài khoản?
              <Link to="/login" className="hover:text-blue-500 ">
                {" "}
                Quay lại tại đây!{" "}
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
              loading={false}
              loaderProps={{ type: "dots" }}
            >
              Đăng ký
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const RegistPage: React.FC<any> = () => {
  return <AuthLayout children={RegistForm}></AuthLayout>;
};

export default RegistPage;
