import { redirect } from "react-router-dom"
import { API_BASE } from "../constants"

export async function loader() {
  const res = await fetch(API_BASE + '/api/assignments/', { credentials: "include" })
  const data = await res.json()
  if (data.user === null) {
    return redirect("/login")
  }
  return {loaderData:data.items,user:data.user}
}