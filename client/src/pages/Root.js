import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { API_BASE } from "../constants";
export default function Root() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState()
  // api call to get logged in user
  useEffect( () => {
      const getUser= async ()=>{
        const res = await fetch(API_BASE + "/api/user", { credentials: "include" })
        const data = await res.json()
        setUser(data.user)
      }
      getUser()

  }, []);
  // console.log("logged in:",user)
  return (
      <Outlet context={{ user, setUser, setMessages,messages}} />
  );
}
