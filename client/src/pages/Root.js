import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { API_BASE } from "../constants";

export default function Root() {
  const [user, setUser] = useState();
  // api call to get logged in user
  useEffect(() => {
    fetch(API_BASE + "/api/user", { credentials: "include" })
      .then((res) => res.json())
      .then((res) => setUser(res.user));
  }, []);
  return (
      <Outlet context={{ user, setUser}} />
  );
}
