import { useState } from "react";

export default function Search(){
    const [searchTxt,setSearchTxt] = useState("");
    function filterCards(e){ 
        let cards=window.document.querySelectorAll('.flashcard')
        let filter = e.currentTarget.value.trim().toUpperCase();
        // let question = window.document.querySelectorAll('.question-div')
        let topic = window.document.querySelectorAll('.topic')

        for (let i = 0; i < cards.length; i++) {
          // let cardQuestion=question[i].innerText.toUpperCase().indexOf(filter)>-1
          let cardTopic=topic[i].innerText.toUpperCase().indexOf(filter)>-1
    
          if ( cardTopic) {
            cards[i].style.display = "";
          } else {
              cards[i].style.display = "none";
          }
        }
      }

    return (
        <section className="search "> 
            <input 
            id="search" 
            type="search" 
            placeholder="Filter by topic" 
            className="bg-transparent color-black dark:color:white"
            onChange={(e)=>{
                setSearchTxt(e.target.value)}}
            value={searchTxt}
            onKeyUp={filterCards}
            />
        </section> 
    )
}