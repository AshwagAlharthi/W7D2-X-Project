import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PremiumContainer from "../components/PremiumContainer";
import LiveContainer from "../components/LiveContainer";
import WhatsHappening from "../components/WhatsHappening";
import FollowingSuggestion from "../components/FollowingSuggestion";
import PostTweetX from "../components/PostTweetX";
import TweetX from "../components/TweetX";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
    
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("name") || !localStorage.getItem("username")) {
      navigate("/");
    }
  }, []);


  return (
    <div className="w-full flex h-screen justify-center items-center">
      <div className="w-[84.5%] h-screen flex justify-between">
        <Sidebar />
        <div className="flex flex-col justify-between w-[91%]">
          <Navbar home="true" />
          <div className="w-full h-screen flex justify-between items-center">
            <div className="w-[61%] h-full border-[#474a4e] border-l">
              <PostTweetX />
              <TweetX />
            </div>
            <div className="w-[39%] h-full flex flex-col justify-start items-end gap-4 pt-4">
              <PremiumContainer />
              <LiveContainer />
              <WhatsHappening />
              {/* <FollowingSuggestion title="اقتراحات المتابعة" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
