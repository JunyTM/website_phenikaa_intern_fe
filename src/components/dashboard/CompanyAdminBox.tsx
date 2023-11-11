import React, { useState } from "react";
import { TextInput, Button ,ActionIcon, useMantineTheme, rem } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateKeySearch,
  setIsCreate,
} from "../../redux/companySlice/companySlice";
import { RootState } from "../../redux/Store";
import ListCompanyName from "./CompanyList";
import CompanyForm from "./CompanyForm";

const CompanyAdminBox: React.FC<any> = () => {
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  // const role = localStorage.getItem("UserRole");
  const addCompany: boolean = useSelector(
    (state: RootState) => state.company.isCreated
  );
  const [keySearch, setKeySearch] = useState("");

  const handleKeySearch = (e: any) => {
    setKeySearch(e.target.value);
    dispatch(updateKeySearch(e.target.value));
  };

  const handleUpdateSlice = () => {
    console.log("keySearch", keySearch);
    dispatch(updateKeySearch(keySearch));
  };

  return (
    <div className="w-[65%] h-[24.5rem] top-[7.3rem] left-[31rem] bg-slate-50 shadow-2xl rounded-xl absolute">
      <div className="w-full h-full p-7 shadow-inner rounded-xl">
        <div className="w-full h-12 flex flex-row items-center justify-between">
          <h1 className="text-3xl font-semibold underline underline-offset-4 opacity-90">
            THÔNG TIN CÔNG TY
          </h1>

          <TextInput
            radius="xl"
            size="md"
            placeholder="Search questions"
            rightSectionWidth={42}
            rightSection={
              <ActionIcon
                size={32}
                radius="xl"
                color={theme.primaryColor}
                variant="filled"
                onClick={handleUpdateSlice}
              >
                <IconArrowRight
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            }
            onChange={handleKeySearch}
            onFocus={(e) => {
              console.log("focus", e.target.value);
            }}
          />
        </div>

        {addCompany ? <CompanyForm /> : <ListCompanyName />}

        <Button
          className="text-sm font-bold px-3 py-1 top-20 right-8 bg-white hover:bg-orange-400 hover:text-white  text-orange-300 absolute shadow-md border-2 rounded-md"
          onClick={() => {
            dispatch(setIsCreate(!addCompany));
          }}
          // display={role === "admin" ? "block" : "none"}
        >
          Tạo mới doanh nghiệp
        </Button>
      </div>
    </div>
  );
};

export default CompanyAdminBox;
