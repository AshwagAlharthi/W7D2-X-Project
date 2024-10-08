import React from "react";

function LiveContainer() {
  return (
    <div className="flex flex-col justify-evenly items-start border border-[#474a4e] gap-2 rounded-2xl w-[92%]">
      <h1 className="text-[1.35rem] font-bold text-white pt-4 px-4">
        بث مباشر على X
      </h1>
      <div className="w-full cursor-pointer rounded-b-2xl hover:bg-[#1c1c1c] flex flex-col justify-start items-start gap-1">
        <div className="flex justify-start items-center gap-1 px-4">
          <img
            className="w-4 h-4 rounded-sm"
            src="https://pbs.twimg.com/profile_images/1841086320124235780/3dK88qLo_400x400.jpg"
          />
          <h2 className="font-bold text-sm text-white">إذاعة القرآن الكريم</h2>
          <svg viewBox="0 0 22 22" role="img" className="w-4 h-4">
            <g>
              <path
                d="M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
                fill="#829aab"
                fillRule="evenodd"
              ></path>
            </g>
          </svg>
          <img
            className="w-4 h-4 rounded-sm"
            src="https://media.licdn.com/dms/image/v2/C4E0BAQEPrqzJNMSwLg/company-logo_200_200/company-logo_200_200/0/1661806944972?e=2147483647&v=beta&t=0xzqm5R5U1E9ALBDAv3QtgswlUP2XGUqsIq_S5pdwkc"
          />
          <p className="text-[0.8rem] text-[#63686c]">تستضيف</p>
        </div>
        <div className="flex justify-between items-start w-full pt-1 pb-4 px-4">
          <h1 className="font-bold text-[1rem] text-white">
            إذاعة القرآن الكريم
          </h1>
          <div className="flex justify-start items-center gap-1 w-[6.5rem] p-[0.1rem] h-9 border-2 border-[#f91880]">
            <img
              className="w-8 h-full rounded-sm"
              src="https://pbs.twimg.com/profile_images/1841086320124235780/3dK88qLo_400x400.jpg"
            />
            <h2 className="font-bold text-sm text-white">2,8 ألف+</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveContainer;
