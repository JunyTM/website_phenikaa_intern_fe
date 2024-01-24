import { APIS_URL } from "../../constants/api";
import { useCallApi } from "../../utils/apiCall";
import { Profile } from "../../model/Profile";
import { ProfilePending, ProfileFail, ProfileSuccess } from "./profileSlice";

const getProfileInfo = async (dispatch: any) => {
  const api = APIS_URL.ADVANCE.filter();
  // console.log("userId", userId);
  const userId: any = localStorage.getItem("UserId");
  console.log("userId", userId);
  dispatch(ProfilePending());
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      querySearch: `user_id = ${userId}`,
      modelType: "profiles",
      ignoreAssociation: true,
    },
  });

  // console.log("response", response);
  const data = response.data.data as Profile[];
  const profileId = data[0].id ? data[0].id : 0;
  if (!error && response.status === 200) {
    dispatch(ProfileSuccess(data));
    localStorage.setItem("ProfileId", profileId.toString());
    console.log("Profile success");
  } else {
    dispatch(ProfileFail());
    console.log("Profile fail");
  }
};

const updateProfile = async (data: Profile, dispatch: any) => {
  const api = APIS_URL.BASIC.upsert();
  const profileIdStr = Number(localStorage.getItem("ProfileId"));
  const profileId = profileIdStr ? profileIdStr : 0;
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      modelType: "profiles",
      data: { ...data, id: profileId },
    },
  });
  if (!error && response.status === 200) {
    console.log("Update profile success");
    // fix to build file
    dispatch(getProfileInfo(dispatch));
  } else {
    console.log("Profile update fail");
  }
};

export const thunkFunctionProfile = {
  getProfileInfo,
  updateProfile,
};
