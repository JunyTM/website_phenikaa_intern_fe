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
              navigate("/forgot-password");
            }}
            size="xs"
            className="text-sm font-semibold"
          >
            Quên mật khẩu?
          </Anchor>
        </div>

        <div className="absolute right-[40%] bottom-[12%] text-md font-medium">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => {}}
            size="xs"
          >
            Bạn chưa có tài khoản?
            <Link to="/register" className="hover:text-blue-500 ">
              {" "}
              Đăng ký ngay!{" "}
            </Link>
          </Anchor>
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
            Đăng nhập
          </Button>
        </div>
      </form>
    </div>
  );
};

const RegistPage: React.FC<any> = () => {
  return <AuthLayout children={RegistForm}></AuthLayout>;
};

export default RegistPage;
