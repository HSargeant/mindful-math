import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { API_BASE } from "../constants";
export default function Root(props) {
  // const [user, setUser] = useState();
  // const [messages, setMessages] = useState()
  // const [loggedIn,setLoggedIn] =useState(false)
  // api call to get logged in user
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"))
    const getUser = async () => {
      if (!user) {
        const res = await fetch(API_BASE + "/api/user", { credentials: "include" })
        const data = await res.json()
        // setUser(data.user)
        if (data.user?.email) {
          window.localStorage.setItem("user", JSON.stringify(data.user))
        }
      }
    }
    getUser()
  }, []);
  return (
    <Outlet />
  );
}
