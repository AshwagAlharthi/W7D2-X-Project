import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import PostTweetX from "../components/PostTweetX";
import TweetX from "../components/TweetX";
import PremiumContainer from "../components/PremiumContainer";
import LiveContainer from "../components/LiveContainer";
import WhatsHappening from "../components/WhatsHappening";
import FollowingSuggestion from "../components/FollowingSuggestion";
import Sidebar from "../components/Sidebar";
import AvatarContainer from "../components/AvatarContainer";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("name") || !localStorage.getItem("username")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[84.5%] flex justify-between">
        <Sidebar />
        <div className="flex flex-col justify-between w-[91%]">
          <Navbar profile="Ashwag Alharthi" />
          <div className="w-full flex justify-between items-center">
            <div className="w-[61%] h-full border-[#474a4e] border-l border-b max-h-full overflow-y-auto">
              <AvatarContainer />
              {/* <TweetX profile="true"/> */}
            </div>
            <div className="w-[39%] h-full flex flex-col justify-start items-end gap-4 pt-4">
              <FollowingSuggestion title="قد يعجبك" />
              <WhatsHappening />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
