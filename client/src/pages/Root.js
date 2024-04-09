import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { API_BASE } from "../constants";
export default function Root(props) {
  const [user, setUser] = useState();
  // const [messages, setMessages] = useState()
  useEffect(() => {
    const getUser = async () => {
        const res = await fetch(API_BASE + "/api/user", { credentials: "include" })
        const data = await res.json()
        setUser(data.user)
    }
    getUser()
  }, []);
  return (
    <Outlet context={{user}}/>
  );
}
