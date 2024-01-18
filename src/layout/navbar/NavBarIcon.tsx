import React from "react";
import { IconHome, IconSettingsBolt, IconBriefcase } from "@tabler/icons-react";
type Props = {};

const NavBarIcon: React.FC<Props> = () => {
  return (
    <div className="w-[4rem] h-[15rem] top-[4.5rem] left-24 shadow-xl rounded-full absolute bg-slate-400 flex flex-col">
      <div className="w-full h-[90%] py-2 flex flex-col items-center justify-around">
        <IconHome size={40} />
        <IconBriefcase size={40} />
        <IconSettingsBolt size={40} />
      </div>
    </div>
  );
};

export default NavBarIcon;
