import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { thunkFunctionProfile } from "../../redux/profileSlice/profile.action";

const FetchRole: React.FC<{ children: React.FC }> = ({
  children: ChildNode,
}) => {
  const dispatch = useDispatch();
  const userIdLocal = localStorage.getItem("userId");
  //   const user = useSelector((state: RootState) => state.auth.user);
  useLayoutEffect(() => {
    if (userIdLocal == undefined) {
      console.log("user is undefined");
      return;
    }
    thunkFunctionProfile.getProfileInfo(Number(userIdLocal), dispatch);
  }, []);

  console.log("user is undefined");

  return (
    <React.Fragment>
      <ChildNode />
    </React.Fragment>
  );
};

export default FetchRole;
