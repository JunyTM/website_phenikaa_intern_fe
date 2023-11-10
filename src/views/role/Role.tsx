import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { Profile } from "../../model/Profile";
import Page404 from "../error/Page404";
import { useNavigate } from "react-router-dom";

const Role: React.FC<{ role: string[]; children: React.FC }> = ({
  role,
  children: Children,
}: {
  role: string[];
  children: React.FC;
}) => {
  // const profile: Profile | null = useSelector(
  //   (state: RootState) => state.profile.list[0]
  // );
  // const checkRole = role.find((r: string) => r === profile?.user.user_roles.role.code);
  const navigate = useNavigate();
  const roleLocal = localStorage.getItem("UserRole");
  console.log(roleLocal);
  console.log(role);
  if (role === undefined || roleLocal === null) {
    navigate("/login");
  }
  const checkRole = role.find((r: string) => r === roleLocal);
  console.log(checkRole);
  return (
    <React.Fragment>
      {checkRole !== undefined ? <Children /> : <Page404 />}
    </React.Fragment>
  );
};

export default Role;
