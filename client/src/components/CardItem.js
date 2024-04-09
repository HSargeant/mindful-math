import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link,navigate, useNavigate} from 'react-router-dom';
import { API_BASE } from '../constants';
import { Tooltip } from '@mui/material';

export default function CardItem({card,refetch}){
    const navigate=useNavigate()
    const showHide=(elem)=>{
        elem.target.parentElement.classList.toggle("flipped")
        elem.target.nextElementSibling.classList.toggle("hide")
    }
    const createHTML=(text)=>{
        return {__html: "Answer: "+text};
    }
    const handleDelete = async (event) => {
		event.preventDefault();
        const confirm = window.confirm("Are you sure you want to delete this card?")
		if(confirm){
            try{
                const form = event.currentTarget;
                await fetch(API_BASE + form.getAttribute('action'), {
                    method: form.method,
                    credentials: "include"
                }); 
                refetch()
                navigate("/flashcards")
            }catch(err){
                console.log(err)
                navigate("/flashcards")
            }
        }else return

	};
    return (
        <div className="card1 border-solid border-2 border-slate-200 dark:border-gray-60 flashcard">
            <p className="question-div dark:text-white">{card.question}</p>
            <a className="show-hide-btn bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 font-bold uppercase cursor-pointer" onClick={showHide}>Show/Hide</a>
            <div className="answer-div hide dark:text-white" ><span> </span><p dangerouslySetInnerHTML={createHTML(card.answer)}></p></div>
            <div className="buttons-con">
                <Link to={`/flashcards/edit/${card._id}`} state={{card:card}}>
                    <button className="edit"><Tooltip title="Edit" placement="bottom"><EditIcon/></Tooltip></button>
                </Link>
                <form action={`/api/flashcards/${card._id}?_method=DELETE`} method="POST" 
                    onSubmit={handleDelete}
                    >
                    <button  className="delete" type="submit"><Tooltip title="Delete" placement="bottom"><DeleteIcon/></Tooltip></button>
                </form>
            </div>
            <span className="dark:text-white topic">Topic: {card.topic}</span>
        </div>
    )
}