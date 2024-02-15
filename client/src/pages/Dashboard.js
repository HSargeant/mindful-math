import Main from "../components/Main"
import TaskC from "../components/TaskC.js";
import NotesC from "../components/NotesC";
import FlashcardC from "../components/FlashcardC";
import { useState,useEffect } from "react";
import { API_BASE } from "../constants";
import { useQuery } from '@tanstack/react-query'

export default function Dashboard() { 

const [quote,setQuote]= useState([])
// const [notes,setNotes]= useState([])
// const [cards,setCards]= useState([])
// const [items,setItems]= useState([])
const getData= async ()=>{
  const res = await fetch(API_BASE+'/api/dashboard/',{ credentials: "include" })
  const  data = await res.json()
  // setQuote(data)
  // setCards(data.cards)
  // setNotes(data.notes)
  // setItems(data.items)
  return [data.cards,data.items,data.notes]
}
const { isPending, error, data, isFetching } = useQuery({
  queryKey: ['dashboardData'],
  queryFn: getData,
  refetchOnWindowFocus: false,
  initialData: [[],[],[]]
})

useEffect(()=>{
  getData()
  },[])
  const [cards,items,notes] = data
  return (
    <Main items={items}  >
    <> 
      {/* <div className="p-2 text-center quote">
        <p className="quoteP">{quote.q}</p>
        <span className="quoteAuthor">{quote.a}</span>
      </div> */}
      <div id="userData" className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
        <TaskC items={items} />
        <FlashcardC cards={cards} />
      </div>          
      <NotesC notes={notes} />
      </>

    </Main> 
  )
}