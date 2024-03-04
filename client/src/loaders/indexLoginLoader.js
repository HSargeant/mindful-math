import { redirect } from "react-router-dom"
import { API_BASE } from "../constants"

export async function loader() {
  const res = await fetch(API_BASE + "/api/user", { credentials: "include" })
  const data = await res.json()
  if (data.user?.email) {
    window.localStorage.setItem("user",JSON.stringify(data.user))
    return redirect("/dashboard")
  }
  return null
}