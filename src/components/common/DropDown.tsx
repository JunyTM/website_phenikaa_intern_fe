import React, { useState } from "react";

const DropDown: React.FC<any> = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="ml-5 relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-4 py-[0.7rem] text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsShow(!isShow)}
        >
          Chuyên ngành
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isShow ? (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
            <button
              className="w-full text-gray-700 hover:bg-slate-300 block px-4 py-2 text-sm text-left"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              Công nghê thông tin
            </button>
            <button
              className="w-full text-gray-700 hover:bg-slate-300 block px-4 py-2 text-sm text-left"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              Tài chính kế toán
            </button>{" "}
            <button
              className="w-full text-gray-700 hover:bg-slate-300 block px-4 py-2 text-sm text-left"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              Dược học
            </button>
            <button
              className="w-full text-gray-700 hover:bg-slate-300 block px-4 py-2 text-sm text-left"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              Cơ khí điện tử
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DropDown;
