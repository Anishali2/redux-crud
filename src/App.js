import React from "react";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./Components/UserProfile";
import Home from "./Home";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import axios from "axios";

const App = () => {
  //https://reqres.in/api/users/3

  React.useEffect(() => {
    axios.get("https://reqres.in/api/users/2").then((res) => {
      console.log(res);
    }
    );
  }
  , []);
  return (
    <>
      <Provider store={store}>
        <Routes>
          {}
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/userprofile" element={<UserProfile />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
