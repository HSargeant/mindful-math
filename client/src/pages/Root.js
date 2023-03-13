import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { API_BASE } from "../constants";

export default function Root() {
  const [user, setUser] = useState();
  const [messages, setMessages] = useState()
  // api call to get logged in user
  useEffect(() => {
    fetch(API_BASE + "/api/user", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user)
      });
  }, []);
  // console.log("logged in:",user)
  return (
      <Outlet context={{ user, setUser, setMessages,messages}} />
  );
}
