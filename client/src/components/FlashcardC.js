import {Link} from "react-router-dom"
import { useQuery } from '@tanstack/react-query'
import { API_BASE } from "../constants"



export default function FlashcardC(){
    const getCards = async () => {
        const res = await fetch(API_BASE+"/api/dashboard/cards",{credentials:"include"})
        const data = await res.json()
        return data.cards
    }
    const { isPending, data: cards, refetch } = useQuery({
        queryKey: ['dashCards'],
        queryFn: getCards,
        refetchOnWindowFocus: false,
        initialData: [],
        // staleTime: 1000,
    })

    function showansw(elem){
        elem.target.nextElementSibling.classList.toggle("hidden")
      }
      const create=(x)=>{
        return {__html: "A: "+ x};

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
                        
                                    <span dangerouslySetInnerHTML={create(card.answer)}className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100 hidden answer"></span>

                
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