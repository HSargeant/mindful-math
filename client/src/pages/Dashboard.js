import Main from "../components/Main"
import TaskC from "../components/TaskC.js";
import NotesC from "../components/NotesC";
import FlashcardC from "../components/FlashcardC";
import { useLoaderData } from "react-router-dom"

export default function Dashboard() {
  const user = useLoaderData()
  return (
    <Main user={user}>
        {/* <div className="p-2 text-center quote">
          <p className="quoteP">{quote.q}</p>
          <span className="quoteAuthor">{quote.a}</span>
        </div> */}
        <div id="userData" className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
          <TaskC />
          <FlashcardC />
        </div>
        <NotesC />
    </Main>
  )
}