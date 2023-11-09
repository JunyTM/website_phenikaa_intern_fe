import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { Profile } from "../../model/Profile";
import Page404 from "../error/Page404";

const Role: React.FC<{ role: string[]; children: React.FC }> = ({
  role,
  children: Children,
}: {
  role: string[];
  children: React.FC;
}) => {
  const profile: Profile | null = useSelector(
    (state: RootState) => state.auth.profile
  );
  const checkRole = role.find((r: string) => r === profile?.user.user_roles.role.code);

  return (
    <React.Fragment>
      {checkRole !== undefined ? <Children /> : <Page404 />}
    </React.Fragment>
  );
};

export default Role;
