import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../containers/Home";
import About from "../containers/About";
import Contact from "../containers/Contact";
import { useEffect, useState } from "react";
import { Button, Result } from "antd";
import Profile from "../containers/Profile";
import SideBar from "../components/Sidebar";
import Test from "../containers/Test";
import Login from "../containers/Login";
import Signup from "../containers/Signup";

function AppRouter() {
  const [user, setUser] = useState("");


  const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setUser(token)
    } else {
      setUser("")
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to={`/profile/${parseJwt(user).username.replace(" ", "-")}`} /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to={`/profile/${parseJwt(user).username.replace(" ", "-")}`} /> : <Signup />} />
        <Route
          path="/about"
          element={
            user ? (
              <SideBar>
                <About />
              </SideBar>
            ) : (
              <Navigate to={"/"} />
            )
          }
        />
        <Route
          path="/contact"
          element={
            user ? (
              <SideBar>
                <Contact />
              </SideBar>
            ) : (
              <Navigate to={"/"} />
            )
          }
        />
        <Route
          path="/profile/:username"
          element={
            user ? (
              <SideBar>
                {" "}
                <Profile />
              </SideBar>
            ) : (
              <Navigate to={"/"} />
            )
          }
        />
        <Route
          path="*"
          element={
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Button type="primary">Back Home</Button>}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
