import axios from "axios";
import React, { useEffect, useState } from "react";

function TweetX({ profile, likes }) {
  const [allTweetsX, setAllTweetsX] = useState([]);
  const [likedTweetsX, setLikedTweetsX] = useState([]);

  const handleLikedTweetsX = (tweetXId) => {
    setLikedTweetsX((prevLiked) => {
      const updatedLiked = [...prevLiked];
      if (!updatedLiked.includes(tweetXId)) {
        updatedLiked.push(tweetXId);
        postLikedTweets(updatedLiked);
      }
      return updatedLiked;
    });
    console.log("lllllll", likedTweetsX);
  };

  const likedTweetsArray = allTweetsX.filter((tweet) =>
    likedTweetsX.includes(tweet.id)
  );

  const postLikedTweets = () => {
    console.log("new", likedTweetsArray);

    axios
      .put(
        `https://66eda70e380821644cdd9b53.mockapi.io/login/${localStorage.getItem(
          "id"
        )}`,
        {
          liked: likedTweetsArray,
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (likedTweetsX.length > 0) {
      postLikedTweets();
    }
  }, [likedTweetsX]);

  const getData = () => {
    const URL = "https://66eda70e380821644cdd9b53.mockapi.io/TweetX";
    axios
      .get(URL)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setAllTweetsX(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDeleteTweetXButton = (id) => {
    axios
      .delete(`https://66eda70e380821644cdd9b53.mockapi.io/TweetX/${id}`)
      .then(function (response) {
        getData();
      });
  };

  return (
    <>
      {!likes && !profile &&
        allTweetsX &&
        allTweetsX
          .slice()
          .reverse()
          .map((tweetx, index) => {
            return (
              <div
                key={index}
                className="w-full flex justify-between items-start hover:cursor-pointer border-b border-[#474a4e] py-2"
              >
                <div className="w-full flex justify-between items-start">
                  <div className="w-[10%] flex justify-center items-center">
                    <div className="w-10 h-10 rounded-full bg-white">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2 w-[90%]">
                    <div className="w-[95%] h-full flex flex-col justify-center items-start max-sm:gap-0.5 ">
                      <div className="w-full flex justify-between items-start">
                        <div className="flex justify-start items-center">
                          <h2 className="font-bold hover:underline max-sm:text-[0.6rem]">
                            {tweetx.name}
                          </h2>
                          <h3
                            className="pr-2 text-[#606060] text-[0.9rem] max-sm:text-[0.45rem]"
                            dir="ltr"
                          >
                            @{tweetx.username}
                          </h3>
                        </div>
                        <details className="dropdown dropdown-left dropdown-bottom">
                          <summary className="btn btn-circle w-7 h-7 min-h-7 border-none flex justify-center items-center max-sm:w-5 max-sm:h-5 max-sm:min-h-5 max-sm:text-[0.7rem] bg-transparent shadow-none">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#606060"
                              className="w-5 h-5 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"
                            >
                              <g>
                                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                              </g>
                            </svg>
                          </summary>
                          {localStorage.getItem("username") ==
                          tweetx.username ? (
                            <ul className="bg-black shadow-sm shadow-white menu dropdown-content rounded-box z-[1] flex justify-center items-center w-28 h-12 px-2 p-0 max-sm:w-20 max-sm:h-8 max-sm:text-[0.5rem]">
                              <div
                                onClick={() =>
                                  handleDeleteTweetXButton(tweetx.id)
                                }
                              >
                                <a className="flex justify-start items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="#a4161f"
                                    className="max-sm:w-4 max-sm:h-4"
                                  >
                                    <g>
                                      <path d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"></path>
                                    </g>
                                  </svg>
                                  <p className="text-[#a4161f]">حذف</p>
                                </a>
                              </div>
                            </ul>
                          ) : (
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] flex justify-center items-center w-28 h-12 px-2 p-0 shadow max-sm:w-20 max-sm:h-8 max-sm:text-[0.5rem]">
                              <div
                                onClick={() =>
                                  handleDeleteTweetXButton(tweetx.id)
                                }
                              >
                                <a className="flex justify-start items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="white"
                                    className="max-sm:w-4 max-sm:h-4"
                                  >
                                    <path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path>
                                  </svg>
                                  <p className="white">إبلاغ</p>
                                </a>
                              </div>
                            </ul>
                          )}
                        </details>
                      </div>
                      <p className="text-white text-[1rem] py-2 max-sm:text-[0.45rem]">
                        {tweetx.text}
                      </p>
                      <div className="flex justify-between items-center w-full">
                        <div className="flex justify-between items-center group">
                          <button className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold hover:text-[#1d9bf0] text-[#63686c] hover:bg-[#0f171f]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c "
                              className="w-5 h-5 group-hover:fill-[#1d9bf0]"
                            >
                              <g>
                                <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                              </g>
                            </svg>
                          </button>
                          <p className="text-[0.7rem] text-[#63686c] group-hover:text-[#1d9bf0]">
                            113
                          </p>
                        </div>
                        <div className="flex justify-between items-center group">
                          <button className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold text-[#63686c] group-hover:text-[#009f6a] hover:bg-[#0f171f]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c"
                              className="w-5 h-5 group-hover:fill-[#009f6a]"
                            >
                              <g>
                                <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                              </g>
                            </svg>
                          </button>
                          <p className="text-[0.7rem] text-[#63686c] group-hover:text-[#009f6a]">
                            629
                          </p>
                        </div>
                        <div className="flex justify-between items-center group">
                          <button
                            onClick={() => handleLikedTweetsX(tweetx.id)}
                            className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold text-[#63686c] group-hover:text-[#f91880] hover:bg-[#0f171f]"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c"
                              className="w-5 h-5 group-hover:fill-[#f91880]"
                            >
                              <g>
                                {likedTweetsX.includes(tweetx.id) ? (
                                  <path
                                    fill="#f91880"
                                    d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                                  ></path>
                                ) : (
                                  <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                                )}
                              </g>
                            </svg>
                          </button>
                          <p
                            className={`text-[0.7rem] group-hover:text-[#f91880] ${
                              likedTweetsX.includes(tweetx.id)
                                ? "text-[#f91880]"
                                : "text-[#63686c]"
                            }`}
                          >
                            {tweetx.favorite}
                          </p>
                        </div>
                        <div className="flex justify-between items-center group">
                          <button className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold text-[#63686c] group-hover:text-[#1d9bf0] hover:bg-[#0f171f]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c"
                              className="w-5 h-5 group-hover:fill-[#1d9bf0]"
                            >
                              <g>
                                <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                              </g>
                            </svg>
                          </button>
                          <p className="text-[0.7rem] text-[#63686c] group-hover:text-[#1d9bf0]">
                            36
                          </p>
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <button className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold text-[#63686c] hover:bg-[#0f171f]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c"
                              className="w-5 h-5 hover:fill-[#1d9bf0]"
                            >
                              <g>
                                <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                              </g>
                            </svg>
                          </button>
                          <button className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold text-[#63686c] hover:bg-[#0f171f]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c"
                              className="w-5 h-5 hover:fill-[#1d9bf0]"
                            >
                              <g>
                                <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                              </g>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

      {!likes && profile &&
        allTweetsX &&
        allTweetsX
          .filter((tweetx) => {
            return tweetx.username == localStorage.getItem("username");
          })
          .slice()
          .reverse()
          .map((tweetx, index) => {
            return (
              <div
                key={index}
                className="w-full flex justify-between items-start hover:cursor-pointer border-b border-[#474a4e] py-2"
              >
                <div className="w-full flex justify-between items-start">
                  <div className="w-[10%] flex justify-center items-center">
                    <div className="w-10 h-10 rounded-full bg-white">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2 w-[90%]">
                    <div className="w-[95%] h-full flex flex-col justify-center items-start max-sm:gap-0.5 ">
                      <div className="w-full flex justify-between items-start">
                        <div className="flex justify-start items-center">
                          <h2 className="font-bold hover:underline max-sm:text-[0.6rem]">
                            {tweetx.name}
                          </h2>
                          <h3
                            className="pr-2 text-[#606060] text-[0.9rem] max-sm:text-[0.45rem]"
                            dir="ltr"
                          >
                            @{tweetx.username}
                          </h3>
                        </div>
                        <details className="dropdown dropdown-left dropdown-bottom">
                          <summary className="btn btn-circle w-7 h-7 min-h-7 border-none flex justify-center items-center max-sm:w-5 max-sm:h-5 max-sm:min-h-5 max-sm:text-[0.7rem] bg-transparent shadow-none">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#606060"
                              className="w-5 h-5 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"
                            >
                              <g>
                                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                              </g>
                            </svg>
                          </summary>
                          {localStorage.getItem("username") ==
                          tweetx.username ? (
                            <ul className="bg-black shadow-sm shadow-white menu dropdown-content rounded-box z-[1] flex justify-center items-center w-28 h-12 px-2 p-0 max-sm:w-20 max-sm:h-8 max-sm:text-[0.5rem]">
                              <div
                                onClick={() =>
                                  handleDeleteTweetXButton(tweetx.id)
                                }
                              >
                                <a className="flex justify-start items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="#a4161f"
                                    className="max-sm:w-4 max-sm:h-4"
                                  >
                                    <g>
                                      <path d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"></path>
                                    </g>
                                  </svg>
                                  <p className="text-[#a4161f]">حذف</p>
                                </a>
                              </div>
                            </ul>
                          ) : (
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] flex justify-center items-center w-28 h-12 px-2 p-0 shadow max-sm:w-20 max-sm:h-8 max-sm:text-[0.5rem]">
                              <div
                                onClick={() =>
                                  handleDeleteTweetXButton(tweetx.id)
                                }
                              >
                                <a className="flex justify-start items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="white"
                                    className="max-sm:w-4 max-sm:h-4"
                                  >
                                    <path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path>
                                  </svg>
                                  <p className="white">إبلاغ</p>
                                </a>
                              </div>
                            </ul>
                          )}
                        </details>
                      </div>
                      <p className="text-white text-[1rem] py-2 max-sm:text-[0.45rem]">
                        {tweetx.text}
                      </p>
                      <div className="flex justify-between items-center w-full">
                        <div className="flex justify-between items-center group">
                          <button className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold hover:text-[#1d9bf0] text-[#63686c] hover:bg-[#0f171f]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c "
                              className="w-5 h-5 group-hover:fill-[#1d9bf0]"
                            >
                              <g>
                                <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                              </g>
                            </svg>
                          </button>
                          <p className="text-[0.7rem] text-[#63686c] group-hover:text-[#1d9bf0]">
                            113
                          </p>
                        </div>
                        <div className="flex justify-between items-center group">
                          <button className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold text-[#63686c] group-hover:text-[#009f6a] hover:bg-[#0f171f]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c"
                              className="w-5 h-5 group-hover:fill-[#009f6a]"
                            >
                              <g>
                                <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                              </g>
                            </svg>
                          </button>
                          <p className="text-[0.7rem] text-[#63686c] group-hover:text-[#009f6a]">
                            629
                          </p>
                        </div>
                        <div className="flex justify-between items-center group">
                          <button
                            onClick={() => handleLikedTweetsX(tweetx.id)}
                            className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold text-[#63686c] group-hover:text-[#f91880] hover:bg-[#0f171f]"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c"
                              className="w-5 h-5 group-hover:fill-[#f91880]"
                            >
                              <g>
                                {likedTweetsX.includes(tweetx.id) ? (
                                  <path
                                    fill="#f91880"
                                    d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                                  ></path>
                                ) : (
                                  <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                                )}
                              </g>
                            </svg>
                          </button>
                          <p
                            className={`text-[0.7rem] group-hover:text-[#f91880] ${
                              likedTweetsX.includes(tweetx.id)
                                ? "text-[#f91880]"
                                : "text-[#63686c]"
                            }`}
                          >
                            {tweetx.favorite}
                          </p>
                        </div>
                        <div className="flex justify-between items-center group">
                          <button className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold text-[#63686c] group-hover:text-[#1d9bf0] hover:bg-[#0f171f]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c"
                              className="w-5 h-5 group-hover:fill-[#1d9bf0]"
                            >
                              <g>
                                <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                              </g>
                            </svg>
                          </button>
                          <p className="text-[0.7rem] text-[#63686c] group-hover:text-[#1d9bf0]">
                            36
                          </p>
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <button className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold text-[#63686c] hover:bg-[#0f171f]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c"
                              className="w-5 h-5 hover:fill-[#1d9bf0]"
                            >
                              <g>
                                <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                              </g>
                            </svg>
                          </button>
                          <button className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold text-[#63686c] hover:bg-[#0f171f]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c"
                              className="w-5 h-5 hover:fill-[#1d9bf0]"
                            >
                              <g>
                                <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                              </g>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}


{likes && likedTweetsArray &&
        likedTweetsX
          .slice()
          .reverse()
          .map((tweetx, index) => {
            return (
              <div
                key={index}
                className="w-full flex justify-between items-start hover:cursor-pointer border-b border-[#474a4e] py-2"
              >
                <div className="w-full flex justify-between items-start">
                  <div className="w-[10%] flex justify-center items-center">
                    <div className="w-10 h-10 rounded-full bg-white">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2 w-[90%]">
                    <div className="w-[95%] h-full flex flex-col justify-center items-start max-sm:gap-0.5 ">
                      <div className="w-full flex justify-between items-start">
                        <div className="flex justify-start items-center">
                          <h2 className="font-bold hover:underline max-sm:text-[0.6rem]">
                            {tweetx.name}
                          </h2>
                          <h3
                            className="pr-2 text-[#606060] text-[0.9rem] max-sm:text-[0.45rem]"
                            dir="ltr"
                          >
                            @{tweetx.username}
                          </h3>
                        </div>
                        <details className="dropdown dropdown-left dropdown-bottom">
                          <summary className="btn btn-circle w-7 h-7 min-h-7 border-none flex justify-center items-center max-sm:w-5 max-sm:h-5 max-sm:min-h-5 max-sm:text-[0.7rem] bg-transparent shadow-none">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#606060"
                              className="w-5 h-5 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"
                            >
                              <g>
                                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                              </g>
                            </svg>
                          </summary>
                          {localStorage.getItem("username") ==
                          tweetx.username ? (
                            <ul className="bg-black shadow-sm shadow-white menu dropdown-content rounded-box z-[1] flex justify-center items-center w-28 h-12 px-2 p-0 max-sm:w-20 max-sm:h-8 max-sm:text-[0.5rem]">
                              <div
                                onClick={() =>
                                  handleDeleteTweetXButton(tweetx.id)
                                }
                              >
                                <a className="flex justify-start items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="#a4161f"
                                    className="max-sm:w-4 max-sm:h-4"
                                  >
                                    <g>
                                      <path d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"></path>
                                    </g>
                                  </svg>
                                  <p className="text-[#a4161f]">حذف</p>
                                </a>
                              </div>
                            </ul>
                          ) : (
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] flex justify-center items-center w-28 h-12 px-2 p-0 shadow max-sm:w-20 max-sm:h-8 max-sm:text-[0.5rem]">
                              <div
                                onClick={() =>
                                  handleDeleteTweetXButton(tweetx.id)
                                }
                              >
                                <a className="flex justify-start items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="white"
                                    className="max-sm:w-4 max-sm:h-4"
                                  >
                                    <path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path>
                                  </svg>
                                  <p className="white">إبلاغ</p>
                                </a>
                              </div>
                            </ul>
                          )}
                        </details>
                      </div>
                      <p className="text-white text-[1rem] py-2 max-sm:text-[0.45rem]">
                        {tweetx.text}
                      </p>
                      <div className="flex justify-between items-center w-full">
                        <div className="flex justify-between items-center group">
                          <button className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold hover:text-[#1d9bf0] text-[#63686c] hover:bg-[#0f171f]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c "
                              className="w-5 h-5 group-hover:fill-[#1d9bf0]"
                            >
                              <g>
                                <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                              </g>
                            </svg>
                          </button>
                          <p className="text-[0.7rem] text-[#63686c] group-hover:text-[#1d9bf0]">
                            113
                          </p>
                        </div>
                        <div className="flex justify-between items-center group">
                          <button className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold text-[#63686c] group-hover:text-[#009f6a] hover:bg-[#0f171f]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c"
                              className="w-5 h-5 group-hover:fill-[#009f6a]"
                            >
                              <g>
                                <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                              </g>
                            </svg>
                          </button>
                          <p className="text-[0.7rem] text-[#63686c] group-hover:text-[#009f6a]">
                            629
                          </p>
                        </div>
                        <div className="flex justify-between items-center group">
                          <button
                            onClick={() => handleLikedTweetsX(tweetx.id)}
                            className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold text-[#63686c] group-hover:text-[#f91880] hover:bg-[#0f171f]"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c"
                              className="w-5 h-5 group-hover:fill-[#f91880]"
                            >
                              <g>
                                {likedTweetsX.includes(tweetx.id) ? (
                                  <path
                                    fill="#f91880"
                                    d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                                  ></path>
                                ) : (
                                  <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                                )}
                              </g>
                            </svg>
                          </button>
                          <p
                            className={`text-[0.7rem] group-hover:text-[#f91880] ${
                              likedTweetsX.includes(tweetx.id)
                                ? "text-[#f91880]"
                                : "text-[#63686c]"
                            }`}
                          >
                            {tweetx.favorite}
                          </p>
                        </div>
                        <div className="flex justify-between items-center group">
                          <button className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold text-[#63686c] group-hover:text-[#1d9bf0] hover:bg-[#0f171f]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c"
                              className="w-5 h-5 group-hover:fill-[#1d9bf0]"
                            >
                              <g>
                                <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                              </g>
                            </svg>
                          </button>
                          <p className="text-[0.7rem] text-[#63686c] group-hover:text-[#1d9bf0]">
                            36
                          </p>
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <button className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold text-[#63686c] hover:bg-[#0f171f]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c"
                              className="w-5 h-5 hover:fill-[#1d9bf0]"
                            >
                              <g>
                                <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                              </g>
                            </svg>
                          </button>
                          <button className="btn btn-circle btn-ghost w-7 h-7 min-h-7 font-bold text-[#63686c] hover:bg-[#0f171f]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="#63686c"
                              className="w-5 h-5 hover:fill-[#1d9bf0]"
                            >
                              <g>
                                <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                              </g>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
      
    }
    </>
  );
}

export default TweetX;
