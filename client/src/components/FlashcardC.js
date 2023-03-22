import {Link} from "react-router-dom"
import { useEffect,useState } from "react"
import {API_BASE} from "../constants"

export default function FlashcardC(){
    const [cards,setCards]= useState([])
    useEffect(()=>{
        const getData= async ()=>{
            const res = await fetch(API_BASE + '/api/flashcards/dashboard', { credentials: "include" } )
            const data = await res.json()
            // console.log("cards: ", data)
            setCards(data)
        }
        getData()
    },[setCards])


    function showansw(elem){
        elem.target.nextElementSibling.classList.toggle("hidden")
      }
      const create=(x)=>{
        return {__html: "Answer: "+ x};

      }
    return(
        <div className="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
            <div className="rounded-t mb-0 px-0 border-0">
                <div className="flex flex-wrap items-center px-4 py-2">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">Recent Flashcards</h3>
                    </div>
                    <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                    <Link
                        to="/flashcards"
                        className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        
                    >
                        Study All
                    </Link>
                    </div>
                </div>
    
                <div className="block w-full">
                    {cards.map((card,index)=>{
                    return(
                    <ul className="my-1" key={index}>
                        <li className="flex px-4">
                            <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                            <i className="fa-regular fa-circle-question text text-xl pr-5"></i>

                            <div className="flex-grow flex justify-between items-center">
                                <div className="self-center">
                                <p className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100 cursor-pointer question" onClick={showansw}>{card.question||""}</p>
                        
                                    <span className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100 hidden answer">{"Answer: "+  `${card.answer.replace(/(<([^>]+)>)/ig, '')}`} </span>

                
                                </div>
                                <div className="self-center">
                                <p className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100 cursor-pointer question">{card.topic||""}</p>
                        
                                    

                                    
                                </div>
                            </div>
                            </div>
                        </li>

                    </ul>

                    )
                    })}
                </div>
            </div>
        </div>
    )
}