import React from "react";

function FollowingSuggestion({title}) {
  return (
    <div className="flex flex-col justify-evenly items-start border border-[#474a4e] rounded-2xl w-[92%]">
      <h1 className="text-[1.35rem] font-bold text-white py-4 px-4">
        {title}
      </h1>
      <div className="flex justify-between items-center w-full cursor-pointer hover:bg-[#1c1c1c] py-1.5 px-4">
        <div className="flex justify-center items-center gap-2">
        <img className="w-10 h-10 rounded-full" src="https://pbs.twimg.com/profile_images/1767608110661705728/6XQYQtDd_400x400.jpg"/>
        <div className="flex flex-col justify-start items-start">
          <div className="flex justify-center items-center gap-1">
            <h2 className="font-bold text-lg text-white hover:underline">منصة إحسان </h2>
            <svg viewBox="0 0 22 22" role="img" className="w-4 h-4">
              <g>
                <path
                  d="M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
                  fill="#829aab"
                  fillRule="evenodd"
                ></path>
              </g>
            </svg>
          </div>
          <h2 className="text-[1rem] text-[#63686c]" dir="ltr">@EhsanSA</h2>
        </div>
        </div>
        <button className="btn btn-circle w-[4.5rem] h-8 min-h-8 border-none bg-[#eff3f4] hover:bg-gray-200 text-black font-bold text-[1rem]">
        متابعة
      </button>
      </div>
      <div className="flex justify-between items-center w-full cursor-pointer hover:bg-[#1c1c1c] py-1.5 px-4">
        <div className="flex justify-center items-center gap-2">
        <img className="w-10 h-10 rounded-md" src="https://pbs.twimg.com/profile_images/1837807545924067328/J2x5xiXX_400x400.jpg"/>
        <div className="flex flex-col justify-start items-start">
          <div className="flex justify-center items-center gap-1">
            <h2 className="font-bold text-lg text-white hover:underline">الراجحي المالية</h2>
            <svg viewBox="0 0 22 22" role="img" className="w-4 h-4">
              <g>
                <path
                  d="M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
                  fill="#e5be28"
                  fillRule="evenodd"
                ></path>
              </g>
            </svg>
          </div>
          <h2 className="text-[1rem] text-[#63686c]" dir="ltr">@AlRajhiCapital</h2>
        </div>
        </div>
        <button className="btn btn-circle w-[4.5rem] h-8 min-h-8 border-none bg-[#eff3f4] hover:bg-gray-200 text-black font-bold text-[1rem]">
        متابعة
      </button>
      </div>
      <div className="flex justify-between items-center w-full cursor-pointer hover:bg-[#1c1c1c] py-1.5 px-4">
        <div className="flex justify-center items-center gap-2">
        <img className="w-10 h-10 rounded-md" src="https://pbs.twimg.com/profile_images/1505560718279643136/QIahJe9y_400x400.jpg"/>
        <div className="flex flex-col justify-start items-start">
          <div className="flex justify-center items-center gap-1">
            <h2 className="font-bold text-lg text-white hover:underline">أخبار السعودية</h2>
            <svg viewBox="0 0 22 22" role="img" className="w-4 h-4">
              <g>
                <path
                  d="M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
                  fill="#e5be28"
                  fillRule="evenodd"
                ></path>
              </g>
            </svg>
          </div>
          <h2 className="text-[1rem] text-[#63686c]" dir="ltr">@SaudiNews50</h2>
        </div>
        </div>
        <button className="btn btn-circle w-[4.5rem] h-8 min-h-8 border-none bg-[#eff3f4] hover:bg-gray-200 text-black font-bold text-[1rem]">
        متابعة
      </button>
      </div>
      <div className="flex flex-col justify-start items-start w-full cursor-pointer rounded-b-2xl hover:bg-[#1c1c1c] pt-5 pb-3 px-4">
        <p className="text-[#1d9bf0]">عرض المزيد</p>
      </div>
    </div>
  );
}

export default FollowingSuggestion;
