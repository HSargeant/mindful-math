import { API_BASE } from "./constants"
async function getData  (url){
    const res= await fetch(API_BASE + url)
    const data= await res.json()
    return


}