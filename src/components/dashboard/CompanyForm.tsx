import React, { useState } from "react";
import { TextInput, Textarea, Button } from "@mantine/core";
import { Company } from "../../model/company";
import { thunkFunctionCompany } from "../../redux/companySlice/company.action";
import { useDispatch } from "react-redux";

const CompanyForm: React.FC<any> = () => {
  const dispatch = useDispatch();
  const [company, setCompany] = useState<Company>({
    user_id: 0, 
    name: "",
    description: "",
    founding_day: "",
    phone: "",
    email: "",
    adress: "",
  });

  const handleSumit = () => {
    thunkFunctionCompany.InsertCompany(company, dispatch);
  };

  return (
    <div className="w-[100%] h-[16rem] mt-6 rounded-md">
      <Button
        className="text-sm font-bold px-3 py-1 top-20 right-60 bg-white hover:bg-orange-400 hover:text-white active:translate-y-[0.1rem]  text-orange-300 absolute shadow-md border-2 rounded-md"
        onClick={handleSumit}
      >
        Cập nhập
      </Button>
      <div className="w-full h-[5rem] mt-10 flex flex-row">
        <TextInput
          className="w-[30%] h-[3rem] ml-6"
          label="Tên công ty:"
          placeholder="VD: FPT Software"
          onChange={(e) => {
            setCompany({
              ...company,
              name: e.target.value,
            });
          }}
        />
        <TextInput
          className="w-[30%] h-[3rem] ml-6"
          label="Email:"
          placeholder="VD: FPT Software"
          onChange={(e) => {
            setCompany({
              ...company,
              email: e.target.value,
            });
          }}
        />
        <TextInput
          className="w-[25%] h-[3rem] ml-6"
          label="Phone:"
          placeholder="VD: FPT Software"
          onChange={(e) => {
            setCompany({
              ...company,
              phone: e.target.value,
            });
          }}
        />
      </div>
      <TextInput
        className="w-[55%] h-[3rem] ml-6"
        label="Địa chỉ:"
        placeholder="VD: FPT Software"
        onChange={(e) => {
          setCompany({
            ...company,
            adress: e.target.value,
          });
        }}
      />
      <Textarea
        className="w-[90%] h-[9rem] mt-6 ml-6"
        placeholder="Autosize with no rows limit"
        label="Mô tả công ty"
        autosize
        minRows={3}
        maxRows={3}
        onChange={(e) => {
          setCompany({
            ...company,
            description: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default CompanyForm;
