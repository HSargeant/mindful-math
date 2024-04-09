import { redirect } from "react-router-dom"
import { API_BASE } from "../constants"

export async function loader() {
  const res = await fetch(API_BASE + '/api/notes/', { credentials: "include" })
  const data = await res.json()
  if (data.user === null) {
    return redirect("/login")
  }
  return { loaderData: data.notes, user: data.user }
}