import React, { useState, useEffect, useLayoutEffect } from "react";
import { thunkFunctionProfile } from "../../redux/profileSlice/profile.action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { Profile } from "../../model/Profile";
import { TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import moment from "moment";

const ProfileInfoDetail: React.FC<any> = () => {
  const dispatch = useDispatch();
  const profile: Profile = useSelector(
    (state: RootState) => state.profile.list[0]
  );

  const [newProfile, setNewProfile] = useState<Profile>({
    id: 0,
    user_id: 0,
    name: "",
    code: "",
    birthday: "",
    phone: "",
    email: "",
  });

  useLayoutEffect(() => {
    thunkFunctionProfile.getProfileInfo(dispatch);
    setNewProfile({
      id: profile?.id,
      user_id: profile?.user_id,
      name: profile?.name,
      code: profile?.code,
      birthday: profile?.birthday,
      phone: profile?.phone,
      email: profile?.email,
      // avatar: "",
    });
  }, []);


  const handleUpdate = () => {
    setNewProfile({
      id: profile?.id,
      user_id: profile?.user_id,
      name: profile?.name,
      code: profile?.code,
      birthday: profile?.birthday,
      phone: profile?.phone,
      email: profile?.email,
      // avatar: "",
    });
    console.log("newProfile", newProfile);
    thunkFunctionProfile.updateProfile(newProfile, dispatch);
    window.location.reload();
  };

  return (
    <div className="w-[65%] h-[23rem] top-[7.3rem] left-[31rem] bg-slate-50 shadow-2xl rounded-xl absolute">
      <div className="w-full h-full p-7 shadow-inner rounded-xl">
        <div className="border-l-8 mb-7">
          <h1 className="font-extrabold text-2xl ml-3 opacity-80 ">
            Thông tin cá nhân
          </h1>
        </div>

        <div className="flex flex-row">
          <div className="w-[75%]">
            <div className="flex flex-row items-center">
              <TextInput
                className="w-64 mr-5"
                label="Họ và tên"
                placeholder={profile?.name}
                onChange={(e) => {
                  setNewProfile({ ...newProfile, name: e.target.value });
                }}
              />
              <TextInput
                className="w-64"
                label="Mã sinh viên"
                placeholder={profile?.code}
                onChange={(e) => {
                  setNewProfile({ ...newProfile, code: e.target.value });
                }}
              />
              <DateInput
                className="w-40 ml-6"
                label="Ngày sinh"
                placeholder={profile?.birthday}
                valueFormat="DD MMM YYYY"
                onChange={(e) => {
                  let date = moment(e).format("DD/MM/YYYY");
                  setNewProfile({
                    ...newProfile,
                    birthday: date,
                  });
                }}
              />
            </div>
            <TextInput
              className="w-72 mt-5"
              label="Số điện thoại"
              placeholder={profile?.phone}
              onChange={(e) => {
                setNewProfile({ ...newProfile, phone: e.target.value });
              }}
            />
            <TextInput
              className="w-96 mt-5"
              label="Email"
              placeholder={profile?.email}
              onChange={(e) => {
                setNewProfile({ ...newProfile, email: e.target.value });
              }}
            />
          </div>

          <img
            className="w-[15%] rounded-xl shadow-xl"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg"
            alt="imge_person"
          />
          <button
            className="w-20 h-7 right-48 top-[20rem] border-2 rounded-2xl hover:text-slate-600 active:translate-y-1 z-50 absolute"
            onClick={handleUpdate}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoDetail;
