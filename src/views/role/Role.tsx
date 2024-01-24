import React from "react";
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
  if (role === undefined || userCredentials === null) {
    thunkFunctionAuth.refesh(navigate, dispatch);
  }

  var checkRole;
  for (let i = 0; i < Role.length; i++) {
    if (role[i] === userCredentials?.role) {
      checkRole = true;
      break;
    }
  }

  return (
    <React.Fragment>
      {checkRole !== undefined ? <Children /> : <Loading />}
    </React.Fragment>
  );
};

export default Role;
