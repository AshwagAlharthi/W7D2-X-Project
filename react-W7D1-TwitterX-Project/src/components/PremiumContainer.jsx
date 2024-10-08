import React from "react";

function PremiumContainer() {
  return (
    <div className="flex flex-col justify-evenly items-start border border-[#474a4e] p-4 gap-2 rounded-2xl w-[92%]">
      <h1 className="text-[1.35rem] font-bold text-white">
        الاشتراك في Premium
      </h1>
      <p className="text-white text-[0.98rem]">
        اشتركي لاكتشاف ميزات جديدة وفي حال كنتِ مؤهلة، ستتسلّمين حصة من إيرادات
        الإعلانات.
      </p>
      <button className="btn btn-circle w-[5.5rem] h-10 min-h-10 border-none bg-[#1d9bf0] hover:bg-[#3390ce] text-white font-bold text-lg">
        اشتراك
      </button>
    </div>
  );
}

export default PremiumContainer;
