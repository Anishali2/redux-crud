import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function UserLogin() {
  const [name, setName] = React.useState("");

  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user)
  const loginUser = () => {
    if(name === ""){
    alert("Please enter a name")}
    else{

      dispatch({
        type: "LOGIN_USER",
        payload: { loginState: true, userName: name },
      });
       navigate("/home");
    }
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              User Sign-up
            </h2>
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <div className="pt-5">
              <label className="sr-only">User Name</label>
              <input
                name="name"
                type="text"
                autoComplete="email"
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={() => loginUser()}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
