import Main from "../components/Main"
import AddFlashcard from "../components/AddFlashcard"
import CardItem from "../components/CardItem";
import { useState,useEffect } from "react";
import Search from "../components/Search"
import "../flashcard.css"
import { API_BASE } from "../constants";


export default function Flashcards(){
    const [cards,setCards] =useState([])
    const addCard=()=>{
      const addQuestionCard = window.document.getElementById("add-question-card");
      const container = window.document.querySelector(".container1");
      container.classList.toggle("hide");
      addQuestionCard.classList.toggle("hide");
      
  }
  useEffect(() => {
    const getData= async ()=>{
        const res= await fetch(API_BASE + "/api/flashcards",{credentials:"include"})
        const data= await res.json()
        setCards(data)
    }
    getData()
  }, []);
  

    return(
        <Main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 container1">
          <div className="add-flashcard-con">
            <button id="add-flashcard" className="bg-blue-500" onClick={addCard}>Add Flashcard</button>
          </div>
          <div id="card-con">
            <Search />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {cards.map((card,i)=>{
                  return(
                    <CardItem key={card._id} card={card} cards={cards} setCards={setCards}/>
                  )
                }) 
              }
            </div>
          </div>
        </div>
  
        {/* <!-- Input form for users to fill question and answer --> */}
        <AddFlashcard/>
        {/* <!-- Script --> */}
  
        {/* 
        <style>
        .ck.ck-editor__main>.ck-editor__editable {
        color:black !important;
        }
        </style> */}
        {/* <Script src="https://cdn.ckeditor.com/ckeditor5/35.1.0/classic/ckeditor.js" /> */}
  
      </Main>
    )
}