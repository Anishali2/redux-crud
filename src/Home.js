import React from "react";
import Header from "./Components/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const user = useSelector((state) => state);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user.isLoggedIn) { navigate("/home") }
    else { navigate("/") }
  }
  , [user.isLoggedIn]);

  return (
    <div>
      {user.isLoggedIn ? (
        <div>
          <Header />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Home Page
            </h2>
            <h6 className="mt-6 text-center text-xl font-extrabold text-gray-900">
              {user.user} 
            </h6>
        </div>
      ) : (
        <div>Please Login user</div>
      )}
    </div>
  );
};

export default Home;
