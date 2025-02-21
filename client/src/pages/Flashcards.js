import Main from "../components/Main"
import AddFlashcard from "../components/AddFlashcard"
import CardItem from "../components/CardItem";
import Search from "../components/Search"
import "../flashcard.css"
import { API_BASE } from "../constants";
import { useLoaderData } from "react-router-dom"
import { useQuery } from '@tanstack/react-query'

export default function Flashcards() {
  const { loaderData,user } = useLoaderData()
  const getCards = async () => {
    const res = await fetch(API_BASE + "/api/flashcards", { credentials: "include" })
    const data = await res.json()
    return data.cards
  }
  const { isPending, data: cards, refetch } = useQuery({
    queryKey: ['flashcards'],
    queryFn: getCards,
    refetchOnWindowFocus: false,
    initialData: loaderData,
    // staleTime: 1000,
  })

  const addCard = () => {
    const addQuestionCard = window.document.getElementById("add-question-card");
    const container = window.document.querySelector(".container1");
    container.classList.toggle("hide");
    addQuestionCard.classList.toggle("hide");
  }

  return (
    <Main user={user}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 container1">
        <div className="add-flashcard-con">
          <button id="add-flashcard" className="bg-blue-500" onClick={addCard}>Add Flashcard</button>
        </div>
        <div id="card-con">
          <Search />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {cards.map((card, i) => {
              return (
                <CardItem key={card._id} card={card} refetch={refetch} />
              )
            })
            }
          </div>
        </div>
      </div>
      <AddFlashcard  refetch={refetch}/>
    </Main>
  )
}