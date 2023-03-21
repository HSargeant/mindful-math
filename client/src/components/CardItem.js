import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

export default function CardItem({card}){
    const showHide=(elem)=>{
        elem.target.parentElement.classList.toggle("flipped")
        elem.target.nextElementSibling.classList.toggle("hide")
    }
    const createHTML=(text)=>{
        return {__html: "Answer: "+text};
    }
    return (
        <div className="card1 border-solid border-2 border-slate-200 dark:border-gray-60 flashcard">
            <p className="question-div dark:text-white">{card.question}</p>
            <a className="show-hide-btn bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 font-bold uppercase cursor-pointer" onClick={showHide}>Show/Hide</a>
            <div className="answer-div hide dark:text-white" ><span> </span><p dangerouslySetInnerHTML={createHTML(card.answer)}></p></div>
            <div className="buttons-con">
                <Link to={`/flashcards/edit/${card._id}`}>
                    <button className="edit"><EditIcon/></button>
                </Link>
                <form action={`/flashcards/${card._id}?_method=DELETE`} method="POST" 
                
                    // onSubmit={
                    //     ()=>{
                    //         if(!window.confirm('Delete Flashcard?')){
                    //             return
                    //         }
                    //     }
                    
                    // }
                    >
                    <button  className="delete"><DeleteIcon/></button>
                </form>
            </div>
            <span className="dark:text-white topic">Topic: {card.topic}</span>
        </div>
    )
}