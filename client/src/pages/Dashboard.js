import Main from "../components/Main"
import TaskC from "../components/TaskC.js";
import NotesC from "../components/NotesC";
import FlashcardC from "../components/FlashcardC";
import { useState,useEffect } from "react";

export default function Dashboard() { 


const [quote,setQuote]= useState([])
useEffect(()=>{
  fetch('https://zenquotes.io/api/quotes')
  .then(res=>res.json())
  .then(data=>{
    let index = Math.floor(Math.random()*data.length)
    setQuote(data[index])

  },[])
      
})

  return (
    // <Main >
    <>
      <div className="p-2 text-center quote">
        <p className="quoteP">{quote.q}</p>
        <span className="quoteAuthor">{quote.a}</span>
      </div>
      <div id="userData" className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
        <TaskC />
        <FlashcardC />
      </div>          
      <NotesC />
      {/* <script src="/main.js" /> */}
      </>

    // </Main> 
  )
}