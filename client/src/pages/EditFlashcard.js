import { useNavigate } from "react-router-dom"
export default function EditFlashcard(){
    const navigate=useNavigate()
    return(
        <>
        edit flashcard
        <br/>
        <button onClick={()=>navigate(-1)}>BACK</button>
        </>
    )
}