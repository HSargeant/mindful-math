import Main from "../components/Main"
import AddFlashcard from "../components/AddFlashcard"
import CardItem from "../components/CardItem";
import { useState,useEffect } from "react";
import Search from "../components/Search"
import "../flashcard.css"
export default function Flashcards(){
    const [cards,setCards] =useState([])
    const addCard=()=>{
      const addQuestionCard = window.document.getElementById("add-question-card");
      const container = window.document.querySelector(".container1");
      container.classList.toggle("hide");
      addQuestionCard.classList.toggle("hide");
      
  }

    useEffect(()=>{
      // if(window!==undefined){
      //   const container = document.querySelector(".container1");
      //   const addQuestionCard = document.getElementById("add-question-card");
      //   // const editQuestionCard = document.getElementById("edit-question-card");
      //   const cardButton = document.getElementById("save-btn");
      //   const question = document.getElementById("question");
      //   const answer = document.getElementById("answer");
      //   const errorMessage = document.getElementById("error");
      //   // const addQuestion = document.getElementById("add-flashcard");
      //   const closeBtn = document.getElementById("close-btn");
      //   const show = document.querySelectorAll(".show-hide-btn")
      //   // const editQuestion = document.querySelector(".edit")


      //     //Add question when user clicks 'Add Flashcard' button
      //     addQuestion.addEventListener("click", () => {
      //       container.classList.add("hide");
      //       addQuestionCard.classList.remove("hide");
      //     });
      //     // editQuestion.addEventListener("click", () => {
      //     //   container.classList.add("hide");
      //     //   editQuestionCard.classList.remove("hide");
      //     // });

      //     show.forEach(x=>{
      //       x.addEventListener('click',()=>{
      //         x.parentElement.classList.toggle("flipped")
      //         x.nextElementSibling.classList.toggle("hide")

      //       })
      //     })

      //     //Hide Create flashcard Card
      //     closeBtn.addEventListener(
      //       "click",
      //       (() => {
      //         container.classList.remove("hide");
      //         addQuestionCard.classList.add("hide");
      //       })
      //     );

      //     // Submit Question
      //     // cardButton.addEventListener(
      //     //   "click",
      //     //   (submitQuestion = () => {
      //     //     const tempQuestion = question.value
      //     //     const tempAnswer = answer.value
      //     //     if (!tempQuestion || !tempAnswer) {
      //     //       errorMessage.classList.remove("hide");
      //     //     }
      //     //   })
      //     // );

      // }
    })

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
                    <CardItem card={card} key={card._id}/>
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