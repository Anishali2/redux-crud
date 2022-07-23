import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
export default function UserLogin() {
  
  const user = useSelector((state) => state);
  const [name, setName] = React.useState(user.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = () => {
    if(name === ""){
    alert("Please enter a name")}
    else{

      dispatch({
        type: "EDIT_USER",
        payload: { editUser: name },
      });
       navigate("/home");
    }
  };

  return (
    <>
    <Header/>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Edit User
            </h2>
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <div className="pt-5">
              <label className="sr-only">User Name</label>
              <input
                name="name"
                type="text"
                autoComplete="email"
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={() => loginUser()}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-amber-500 group-hover:text-amber-600"
                  aria-hidden="true"
                />
              </span>
              Edit User
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
