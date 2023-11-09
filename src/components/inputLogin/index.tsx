import { useToggle, upperFirst } from "@mantine/hooks";
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

import { thunkFunctionAuth } from "../../redux/authSlice/authen.action";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/Store";
import React, { useState } from "react";
import axios from "axios";
import { loginPending } from "../../redux/authSlice/authenSclice";

export const AuthenticationForm: React.FC<any> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetching: boolean = useSelector(
    (state: RootState) => state.auth.isFetching
  );
  const [type, toggle] = useToggle(["ĐĂNG NHẬP", "ĐĂNG KÝ"]);
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const validate = (values: string) => {
    return /^\S+@\S+$/.test(values) ? null : "Invalid email";
  };

  const handleSumit = (e: any) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(loginPending());
      thunkFunctionAuth.login(
        {
          username: credentials.username,
          password: credentials.password,
        },
        navigate,
        dispatch
      );
    } else {
      dispatch(loginPending());
      thunkFunctionAuth.register(
        {
          username: credentials.username,
          password: credentials.password,
          fullName: credentials.fullName,
          email: credentials.email,
          phone: credentials.phone,
        },
        navigate,
        dispatch
      );
      // toggle();
    }
  };

  return (
    <div>
      <Text
        className="text-center mt-8 text-5xl font-extrabold"
        size="lg"
        fw={500}
      >
        {type}
      </Text>

      <Divider label="thông tin của bạn" labelPosition="center" my="lg" />

      <form id="login" name="login">
        <Stack>
          {type === "ĐĂNG KÝ" && (
            <TextInput
              label="Name"
              name="fullName"
              placeholder="Your name"
              onChange={(event) =>
                setCredentials((prev) => ({
                  ...prev,
                  fullName: event.target.value,
                }))
              }
              radius="md"
            />
          )}

          {type === "ĐĂNG KÝ" && (
            <TextInput
              label="Phone"
              name="phone"
              placeholder="+84 ..."
              onChange={(event) =>
                setCredentials((prev) => ({
                  ...prev,
                  phone: event.target.value,
                }))
              }
              radius="md"
            />
          )}

          {type === "ĐĂNG KÝ" && (
            <TextInput
              required
              label="Email"
              name="email"
              placeholder="hello@mantine.dev"
              onChange={(event) => {
                setCredentials((prev) => ({
                  ...prev,
                  email: event.target.value,
                }));
              }}
              error={
                credentials.email.length > 0 && validate(credentials.email)
              }
              radius="md"
            />
          )}

          <TextInput
            label="Username"
            name="username"
            placeholder="user ..."
            onChange={(event) =>
              setCredentials((prev) => ({
                ...prev,
                username: event.target.value,
              }))
            }
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            name="password"
            placeholder="Your password"
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

        <Group style={{ justifyContent: "space-between" }} mt="xl">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => {
              toggle();
              setIsLogin(!isLogin);
            }}
            size="xs"
          >
            {type === "ĐĂNG KÝ"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
        </Group>

        <div className="mt-4 ml-7">
          <Button
            onClick={handleSumit}
            w={300}
            h={45}
            style={{ backgroundColor: "#5a67d8" }}
            radius="xl"
            variant="filled"
            color="indigo"
            loading={fetching}
            loaderProps={{ type: "dots" }}
          >
            {upperFirst(type)}
          </Button>
        </div>
      </form>
    </div>
  );
};
