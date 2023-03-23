import Main from "../components/Main"
import TaskC from "../components/TaskC.js";
import NotesC from "../components/NotesC";
import FlashcardC from "../components/FlashcardC";
import { useState,useEffect } from "react";
import { API_BASE } from "../constants";

export default function Dashboard() { 

const [quote,setQuote]= useState([])
const [notes,setNotes]= useState([])
const [cards,setCards]= useState([])
const [items,setItems]= useState([])

useEffect(()=>{
  const getData= async ()=>{
    const res = await fetch(API_BASE+'/api/dashboard/',{ credentials: "include" })
    const  data = await res.json()
    // setQuote(data)
    setCards(data.cards)
    setNotes(data.notes)
    setItems(data.items)
  }
  getData()
  },[])

  return (
    <Main items={items} setItems={setItems} >
    <> 
      {/* <div className="p-2 text-center quote">
        <p className="quoteP">{quote.q}</p>
        <span className="quoteAuthor">{quote.a}</span>
      </div> */}
      <div id="userData" className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
        <TaskC items={items} setItems={setItems} />
        <FlashcardC cards={cards} setCards={setCards}/>
      </div>          
      <NotesC notes={notes} setNotes={setNotes}/>
      </>

    </Main> 
  )
}