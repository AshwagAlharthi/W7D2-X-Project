import React, { useEffect, useState } from "react";
import TweetX from "./TweetX";
import axios from "axios";

function AvatarContainer() {
    const [showPosts, setShowPosts] = useState();
    const [showLikes, setShowLikes] = useState(false);

  return (
    <div className="w-full flex flex-col justify-between items-start pb-2">
      <div className="relative flex-col w-full h-[75vh] justify-center items-center">
        <button className="absolute top-[7.5rem] right-3 btn btn-circle h-36 w-36 bg-transparent text-center bg-gray-800 hover:bg-gray-800 shadow-none border-none">
          <div className="w-[95%] h-[95%] rounded-full bg-white">
            <img
              className="w-[full] h-full rounded-full"
              src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
            />
          </div>
        </button>
        <div className="w-full h-[44%] bg-gray-400"></div>
        <div className="w-full flex justify-center items-end pt-3">
          <div className="flex flex-col  justify-start items-start w-[95%]">
            <div className="w-full flex justify-end items-center">
              <button className="btn btn-circle w-48 h-10 min-h-10 border border-[#474a4e] text-white font-bold text-[1rem]">
                تعديل الملف الشخصيّ
              </button>
            </div>
            <div className="flex flex-col justify-start items-start pt-6">
              <div className="flex justify-center items-center gap-3">
                <h2 className="font-bold text-[1.35rem] text-white hover:underline">
                  {localStorage.getItem("name")}
                </h2>
                <button className=" flex justify-center items-center btn btn-circle w-[7.2rem] h-7 min-h-7 border border-[#474a4e] text-white font-bold text-[0.9rem]">
                  <svg viewBox="0 0 22 22" role="img" className="w-4 h-4">
                    <g>
                      <path
                        d="M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
                        fill="#1d9bf0"
                        fillRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                  <p> وثّق حسابك</p>
                </button>
              </div>
              <h2 className="text-[1rem] text-[#63686c]" dir="ltr">
                @{localStorage.getItem("username")}
              </h2>
            </div>
            <p className="py-3">-----------</p>
            <div className="flex justify-center items-center gap-1">
              <svg
                viewBox="0 0 22 22"
                role="img"
                fill="#63686c"
                className="w-4 h-4"
              >
                <g>
                  <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
                </g>
              </svg>
              <p className="text-[#63686c]">انضم في مايو ٢٠٢٠</p>
            </div>
            <div className="flex justify-center items-center gap-6 py-3">
              <p className="text-white font-bold text-sm hover:underline hover:cursor-pointer">
                ٣٩<span className="text-[#63686c] mr-1">متابَعًا</span>
              </p>
              <p className="text-white font-bold text-sm hover:underline hover:cursor-pointer">
                ٣٩٩<span className="text-[#63686c] mr-1">متابِعين</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full h-full border-[#474a4e] border-b">
        <button className="btn w-[16.5%] h-full bg-[rgba(0,0,0,0.5)] border-none hover:bg-[rgba(84,88,92,0.3)] text-[#63686c] text-sm">
          المنشورات
        </button>
        <button className="btn w-[16.5%] h-full bg-[rgba(0,0,0,0.5)] border-none hover:bg-[rgba(84,88,92,0.3)] text-[#63686c] text-sm">
          الردود
        </button>
        <button className="btn w-[16.5%] h-full bg-[rgba(0,0,0,0.5)] border-none hover:bg-[rgba(84,88,92,0.3)] text-[#63686c] text-sm">
          المميزة
        </button>
        <button className="btn w-[16.5%] h-full bg-[rgba(0,0,0,0.5)] border-none hover:bg-[rgba(84,88,92,0.3)] text-[#63686c] text-sm">
          المقالات
        </button>
        <button className="btn w-[16.5%] h-full bg-[rgba(0,0,0,0.5)] border-none hover:bg-[rgba(84,88,92,0.3)] text-[#63686c] text-sm">
          الوسائط
        </button>
        <button onClick={()=>setShowLikes(true)} className="btn w-[16.5%] h-full bg-[rgba(0,0,0,0.5)] border-none hover:bg-[rgba(84,88,92,0.3)] text-[#63686c] text-sm">
          الإعجابات
        </button>
      </div>

      <TweetX profile="true"/>

      {showLikes && <TweetX likes="true"/>}

    </div>
  );
}

export default AvatarContainer;
