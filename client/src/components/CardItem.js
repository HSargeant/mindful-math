export default function CardItem({card}){
    const showHide=(elem)=>{
        elem.target.parentElement.classList.toggle("flipped")
        elem.target.nextElementSibling.classList.toggle("hide")
    }
    return (
        <div className="card1 border-solid border-2 border-slate-200 dark:border-gray-600	">
            <p className="question-div dark:text-white">{card.question}</p>
            <a className="show-hide-btn bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 font-bold uppercase cursor-pointer" onClick={showHide}>Show/Hide</a>
            <div className="answer-div hide dark:text-white"><p>{`A7: `} {card.answer.replaceAll( /[<,>,/,p]/gi,"")}</p></div>
            <div className="buttons-con">
                <a href={`/flashcards/edit/${card._id}`}>
                    <button className="edit"><i className="fa-solid fa-pen-to-square"></i></button>
                </a>
                <form action={`/flashcards/${card._id}?_method=DELETE`} method="POST" 
                
                    // onSubmit={
                    //     ()=>{
                    //         if(!window.confirm('Delete Flashcard?')){
                    //             return
                    //         }
                    //     }
                    
                    // }
                    >
                    <button  className="delete"><i className="fa-solid fa-trash-can"></i></button>
                </form>
            </div>
            <span className="dark:text-white topic">{card.topic}</span>
        </div>
    )
}