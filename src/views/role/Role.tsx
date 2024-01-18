import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/Store";
import { useNavigate } from "react-router-dom";
import { thunkFunctionAuth } from "../../redux/authSlice/authen.action";
import Loading from "../error/Loading";

const Role: React.FC<{ role: string[]; children: React.FC }> = ({
  role,
  children: Children,
}: {
  role: string[];
  children: React.FC;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userCredentials = useSelector((state: RootState) => state.auth.user);
  console.log(userCredentials);
  if (role === undefined || userCredentials === null) {
    thunkFunctionAuth.refesh(navigate, dispatch);
  }

  var checkRole = role.find((r: string) => r === userCredentials?.role);
  return (
    <React.Fragment>
      {checkRole !== undefined ? <Children /> :  <Loading />}
    </React.Fragment>
  );
};

export default Role;
