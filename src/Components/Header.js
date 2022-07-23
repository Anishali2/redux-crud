import React, { Fragment, useEffect } from "react";
import { Popover, Transition, Menu } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCartIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { user as userData } from "../assets/constants";

const userState = [
  { name: "Your Profile", href: "/userProfile" },
  { name: "Sign out", href: "/logout" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const logoutbtn = (value) => {
    // if (value == 1) {
    //   dispatch({ type: "LOG_OUT", payload: { alert: true } });
    // }
  };


  return (
    <Popover className="relative bg-white">
      <div className="bg-indigo-600 p-1">
        <div className=" max-w-[1300px] mx-auto h-10 flex items-center  px-4 sm:px-6 lg:px-8 justify-between">
          <p className=" text-sm font-medium text-white ">
            <Link to="/home">Home</Link>
          </p>
          <p className=" text-sm font-medium text-white ">
            Welcome, {user}
          </p>
          <Menu as="div" className="ml-3 relative flex">
           
            <div>
              <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={userData.imageUrl}
                  alt=""
                />
              </Menu.Button>
            </div>
            
              <Menu.Items className="origin-top-right absolute right-0 mt-8 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                {userState.map((item, index) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <Link to={`${item.href}`}>
                        <p
                          onClick={() => logoutbtn(index)}
                          // href={item.href}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          {item.name}
                        </p>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
          </Menu>
        </div>
      </div>
    </Popover>
  );
}
