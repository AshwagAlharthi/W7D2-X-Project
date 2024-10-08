import React from "react";
import { Link } from "react-router-dom";

function LoginTypes() {
  if (localStorage.getItem("name") || localStorage.getItem("username")) {
    localStorage.removeItem("name");
    localStorage.removeItem("username");
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-80 h-80 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>
        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <h1 className="text-5xl font-bold">يحدث الآن</h1>
            <p className="py-6 text-2xl font-bold">انضمّ اليوم.</p>
            <div className="form-control mt-6">
              <Link to="/register">
                <button className="btn btn-circle w-80 bg-[#1d9bf0] text-white hover:bg-[#3390ce] ">
                  إنشاء حساب
                </button>
              </Link>
              <div className="divider text-sm">أو</div>
              <Link to="/login">
                <button className="btn btn-circle w-80 border-[#474a4e] bg-black text-[#1d9bf0] hover:bg-[#0f171f]">
                  تسجيل الدخول
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginTypes;
