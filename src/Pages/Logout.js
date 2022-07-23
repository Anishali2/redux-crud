import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
export default function Logout() {





  const user = useSelector((state) => state);
  const navigate = useNavigate();
  console.log(user);
  
  const dispatch = useDispatch();
  const loginUser = () => {
    dispatch({type: "LOG_OUT"});
    navigate("/");
  };



















  return (
    <>
      <Header />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
             {user.user} Are You Sure You Want to Logout?
            </h2>
          </div>

          <div>
            <button
              type="submit"
              onClick={() => loginUser()}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-red-600 group-hover:text-red-600"
                  aria-hidden="true"
                />
              </span>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
