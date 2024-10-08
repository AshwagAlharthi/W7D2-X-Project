import React, { useState } from "react";

function Navbar({ home, profile }) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="sticky top-0 z-20 w-full h-[9%] flex justify-between items-center bg-black">
        
      {home && (
        <div className="w-[61%] h-full border-[#474a4e] border-l border-b">
          <button className="btn w-[50%] h-full bg-[rgba(0,0,0,0.5)] border-none hover:bg-[rgba(84,88,92,0.3)] text-lg">
            لك
          </button>
          <button className="btn w-[50%] h-full bg-[rgba(0,0,0,0.5)] border-none hover:bg-[rgba(84,88,92,0.3)] text-lg">
            متابَعة
          </button>
        </div>
      )}
      {profile && (
        <div className="w-[61%] h-full border-[#474a4e] border-l border-b">
          <button className="btn w-full h-full bg-[rgba(0,0,0,0.5)] border-none hover:bg-[rgba(0,0,0,0.5)] text-lg flex justify-start items-center gap-6">
            <button className="btn btn-circle btn-ghost w-10 h-10 min-h-10 font-bold text-[#63686c] hover:bg-[#0f171f] hover:text-[#1D9BF0]">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="white"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
            <div className="h-full flex flex-col justify-start items-start">
              <div className="flex justify-center items-center gap-1">
                <h2 className="font-bold text-[1.35rem] text-white">
                  {localStorage.getItem("username")}
                </h2>
                
              </div>
              <h2 className="text-[0.8rem] text-[#63686c]"> منشورات</h2>
            </div>
          </button>
        </div>
      )}
      <div className="w-[39%] h-full flex justify-end items-center">
        <label
          className={`flex items-center gap-4 w-[92%] h-[80%] pr-4
            ${
              isFocus ? "bg-black border border-[#1d9bf0]" : "bg-[#292828]"
            } rounded-full`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill={`${isFocus ? "#1d9bf0" : "#54585c"}`}
            className="h-6 w-6 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            className="placeholder:text-[#54585c]  w-full h-full bg-transparent outline-none"
            placeholder="بحث"
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
        </label>
      </div>
    </div>
  );
}

export default Navbar;
