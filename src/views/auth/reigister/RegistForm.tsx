import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../../utils/toast";
import { RootState } from "../../../redux/Store";
import { REGIST_VARIABLE } from "./RegisterConst";
import { Link } from "react-router-dom";
import {
  TextInput,
  PasswordInput,
  Text,
  Button,
  Divider,
  Checkbox,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import {
  ValidateEmail,
  ComparePassword,
  DateToString,
} from "../../../utils/tools";
import AuthLayout from "../../../layout/authen/AuthLayout";
import { UserRegister } from "../../../model/user";
import { thunkFunctionAuth } from "../../../redux/authSlice/authen.action";
import { ROUTE } from "../../../constants/router";

const RegistForm: React.FC<any> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isFetching = useSelector((state: RootState) => state.auth.isFetching);
  const [statePolicy, setStatePolicy] = useState(false);
  const [re_password, set_re_password] = useState("");
  const [credentials, setCredentials] = useState<UserRegister>({
    fullName: "",
    password: "",
    email: "",
    code: "",
    birthday: "",
    phone: "",
  });

  const selectBirthOfDate = (event: Date | null) => {
    setCredentials((prev) => ({
      ...prev,
      birthday: DateToString(event),
    }));
  };

  const handleSumit = (e: any) => {
    e.preventDefault();
    if (
      credentials.fullName !== "" &&
      credentials.code !== "" &&
      credentials.email !== "" &&
      credentials.password !== "" &&
      credentials.phone !== "" &&
      ComparePassword(credentials.password, re_password) === null
    ) {
      thunkFunctionAuth.register(credentials, navigate, dispatch);
    } else {
      notify("warning", "Vui lòng điền đầy đủ thông tin");
    }
  };

  return (
    <div className="max-w-[39rem] h-[40rem] m-auto">
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
                name="fullName"
                placeholder="Nguyễn Văn A ..."
                onChange={(event) =>
                  setCredentials((prev) => ({
                    ...prev,
                    fullName: event.target.value,
                  }))
                }
                radius="md"
                size="sm"
                required
              />
              <TextInput
                className="w-60"
                label="Mã sinh viên"
                name="code"
                placeholder="20010784"
                onChange={(event) =>
                  setCredentials((prev) => ({
                    ...prev,
                    code: event.target.value,
                  }))
                }
                radius="md"
                required
              />
            </div>

            <div className="flex flex-row mt-4">
              <TextInput
                className="w-44 mr-24"
                label="Số điện thoại"
                name="phone"
                placeholder="0123456789"
                onChange={(event) =>
                  setCredentials((prev) => ({
                    ...prev,
                    phone: event.target.value,
                  }))
                }
                radius="md"
                size="sm"
              />
              <DateInput
                onChange={(date) => selectBirthOfDate(date)}
                label="Ngày sinh"
                name="birthday"
                placeholder="dd/mm/yyyy"
                valueFormat="DD/MM/YYYY"
                className="w-[10rem] min-w-[10rem]"
                radius="md"
                size="sm"
              />
            </div>

            <TextInput
              className="mt-5"
              label="Email"
              name="email"
              placeholder="20010784@phenikaa-uni ..."
              onChange={(event) =>
                setCredentials((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
              error={
                credentials.email.length > 0 && ValidateEmail(credentials.email)
              }
              radius="md"
              required
            />

            <PasswordInput
              className="mt-2"
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
                "Mật khẩu phải có ít nhất 5 ký tự"
              }
              radius="md"
              required
            />

            <PasswordInput
              className="mt-2"
              label="Nhập lại mật khẩu:"
              name="re_password"
              placeholder="********"
              onChange={(event) => {
                set_re_password(event.target.value);
              }}
              error={
                re_password.length > 0 &&
                re_password.length > 0 &&
                ComparePassword(credentials.password, re_password)
              }
              radius="md"
              required
            />
          </div>
          <Checkbox
            className="mt-6 ml-[45%] font-medium"
            mt="sm"
            label={
              <p className="text-gray-500">
                Tôi đồng ý với{" "}
                <a className="text-blue-600" href={REGIST_VARIABLE.Policy}>
                  điều khoản
                </a>{" "}
                sử dụng!
              </p>
            }
            onChange={(event) => setStatePolicy(event.currentTarget.checked)}
          />
          <div className="mt-7 ml-[25%]">
            <Button
              onClick={handleSumit}
              w={300}
              h={45}
              style={
                !statePolicy
                  ? {
                      color: "#b2aea9",
                      backgroundColor: "#5a67d8",
                      transition: "background-color 0.1s ease",
                    }
                  : { backgroundColor: "#6979fe" }
              }
              radius="xl"
              variant="filled"
              color="indigo"
              loading={isFetching}
              loaderProps={{ type: "dots" }}
              disabled={!statePolicy}
            >
              Đăng ký
            </Button>
          </div>{" "}
          <div className="absolute right-[40%] bottom-[12%] text-sm font-semibold text-gray-400">
            <p>
              Bạn đã có tài khoản?
              <Link to={ROUTE.LOGIN.PATH} className="hover:text-blue-500 ">
                {" "}
                Quay lại tại đây.{" "}
              </Link>
            </p>
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
