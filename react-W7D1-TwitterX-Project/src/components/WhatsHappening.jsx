import React, { useState } from "react";

function WhatsHappening() {
  return (
    <div className="flex flex-col justify-evenly items-start border border-[#474a4e] rounded-2xl w-[92%]">
      <h1 className="text-[1.35rem] font-bold text-white pt-4 px-4">
        ماذا يحدث
      </h1>
      <div className="flex flex-col justify-evenly items-start w-full cursor-pointer hover:bg-[#1c1c1c] py-1.5 px-4">
        <h2 className="font-bold text-lg text-white">#نرتقي_بجودة_الحياة</h2>
        <p className="text-[0.95rem] text-[#63686c]">برنامج جودة الحياة</p>
        <div className="w-full flex justify-start items-center gap-1">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#63686c">
            <g>
              <path d="M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z"></path>
            </g>
          </svg>
          <p className="text-[0.8rem] text-[#63686c]">
            مُروَّج بواسطة برنامج جودة الحياة
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-full cursor-pointer hover:bg-[#1c1c1c] py-1.5 px-4">
        <div className="w-full flex justify-between items-center -mb-2">
          <p className="text-[0.8rem] text-[#63686c]">
            المتداول في المملكة العربية السعودية
          </p>
          <button className="btn btn-circle btn-ghost w-9 h-9 min-h-9 font-bold text-[#63686c] hover:bg-[#0f171f] hover:text-[#1D9BF0] pb-2">
            . . .
          </button>
        </div>
        <h2 className="font-bold text-lg text-white">الراتب الاساسي</h2>
        <div className="w-full flex justify-start items-center gap-1"></div>
      </div>
      <div className="flex flex-col justify-start items-start w-full cursor-pointer hover:bg-[#1c1c1c] py-1.5 px-4">
        <div className="w-full flex justify-between items-center -mb-2">
          <p className="text-[0.8rem] text-[#63686c]">صور شعبية · متداول</p>
          <button className="btn btn-circle btn-ghost w-9 h-9 min-h-9 font-bold text-[#63686c] hover:bg-[#0f171f] hover:text-[#1D9BF0] pb-2">
            . . .
          </button>
        </div>
        <h2 className="font-bold text-lg text-white -mb-2">الصحه القابضه</h2>
        <p className="text-[0.8rem] text-[#63686c] w-full text-left">
          posts ٢٬٨١٠
        </p>
      </div>
      <div className="flex flex-col justify-start items-start w-full cursor-pointer hover:bg-[#1c1c1c] py-1.5 px-4">
        <div className="w-full flex justify-between items-center -mb-2">
          <p className="text-[0.8rem] text-[#63686c]">السياسة · متداول</p>
          <button className="btn btn-circle btn-ghost w-9 h-9 min-h-9 font-bold text-[#63686c] hover:bg-[#0f171f] hover:text-[#1D9BF0] pb-2">
            . . .
          </button>
        </div>
        <h2 className="font-bold text-lg text-white">
          #الملك_سلمان_بن_عبدالعزيز
        </h2>
        <p className="text-[0.8rem] text-[#63686c]">
          المتداول مع{" "}
          <span className="text-[#1d9bf0] cursor-pointer hover:underline">
            الحرمين الشريفين الملك
          </span>
        </p>
      </div>
      <div className="flex flex-col justify-start items-start w-full cursor-pointer hover:bg-[#1c1c1c] py-1.5 pb-4 px-4">
        <div className="w-full flex justify-between items-center -mb-2">
          <p className="text-[0.8rem] text-[#63686c]">رياضة · متداول</p>
          <button className="btn btn-circle btn-ghost w-9 h-9 min-h-9 font-bold text-[#63686c] hover:bg-[#0f171f] hover:text-[#1D9BF0] pb-2">
            . . .
          </button>
        </div>
        <h2 className="font-bold text-lg text-white -mb-2">فهد العتيبي</h2>
        <p className="text-[0.8rem] text-[#63686c] w-full text-left">
          posts ١٨٫٦ ألف
        </p>
      </div>
      <div className="flex flex-col justify-start items-start w-full cursor-pointer rounded-b-2xl hover:bg-[#1c1c1c] pt-5 pb-3 px-4">
        <p className="text-[#1d9bf0]">عرض المزيد</p>
      </div>
    </div>
  );
}

export default WhatsHappening;
