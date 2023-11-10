import { APIS_URL } from "../../constants/api";
import { useCallApi } from "../../utils/apiCall";
import { Profile } from "../../model/Profile";
import { ProfilePending, ProfileFail, ProfileSuccess } from "./profileSlice";
import Cookies from "js-cookie";

const getProfileInfo = async (userId: number, dispatch: any) => {
  const api = APIS_URL.ADVANCE.filter();
  console.log("userId", userId);
  dispatch(ProfilePending());
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      querySearch: `user_id = ${userId}`,
      modelType: "profiles",
      ignoreAssociation: false,
    },
  });

  console.log("response", response);
  const data = response.data.data as Profile[];
  const role = data[0]?.user?.user_roles?.role?.code;
  localStorage.setItem("userRole", role);
 
  if (!error && response.status === 200) {
    dispatch(ProfileSuccess({ profile: data, role: role }));
    console.log("Profile success");
  } else {
    dispatch(ProfileFail());
    console.log("Profile fail");
  }
};

export const thunkFunctionProfile = {
  getProfileInfo,
};
