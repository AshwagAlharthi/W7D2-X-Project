import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  if (localStorage.getItem("name") || localStorage.getItem("username")) {
    localStorage.removeItem("name");
    localStorage.removeItem("username");
  }
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usersInfo, setUsersInfo] = useState();
  const navigate = useNavigate();
  const URL = "https://66eda70e380821644cdd9b53.mockapi.io/login";
  const [alertMessage, setAlertMessage] = useState("");

  const getData = () => {
    axios
      .get(URL)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setUsersInfo(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const postNewUser = () => {
    axios
      .post(URL, {
        name: name,
        username: username,
        email: email,
        password: password,
        liked:{},
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handlePostButton = () => {
    const isUserExist = usersInfo.some((user) => user.username == username);
    if (isUserExist) {
      setAlertMessage("المستخدم موجود بالفعل!");
      return;
    } else {
      if (name !== "" && username !== "" && email !== "" && password !== "") {
        postNewUser();
        navigate("/login");
        setAlertMessage("");
      } else {
        setAlertMessage("الرجاء تعبئة الحقول!");
      }
    }
  };

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
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">اسم المستخدم</span>
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="اسم المستخدم"
                className="input input-bordered rounded-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">حساب المستخدم</span>
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="حساب المستخدم"
                className="input input-bordered rounded-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">البريد الالكتروني</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="البريد الالكتروني"
                className="input input-bordered rounded-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">كلمة المرور</span>
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="كلمة المرور"
                className="input input-bordered rounded-full"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                onClick={handlePostButton}
                className="btn btn-circle w-80 bg-[#1d9bf0] text-white hover:bg-[#3390ce] "
              >
                إنشاء حساب جديد
              </button>
            </div>
            <label className="label">
              <p className="label-text-alt text-sm">
                لديك حساب بالفعل؟{" "}
                <Link to="/login">
                  <span className="text-[#1d9bf0] link link-hover font-bold">
                    تسجيل الدخول
                  </span>
                </Link>
              </p>
            </label>
            {alertMessage && (
              <p className="font-bold text-sm text-red-700 text-center">
                {alertMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
