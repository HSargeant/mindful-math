import {Link} from "react-router-dom"
import { useEffect,useState } from "react"
import {API_BASE} from "../constants"

export default function NotesC(){
    const [notes,setNotes]= useState([])
    useEffect(()=>{
        const getData= async ()=>{
            const res = await fetch(API_BASE + '/api/notes/dashboard', { credentials: "include" } )
            const data = await res.json()
            console.log("notes: ", data)
            setNotes(data)
        }
        getData()
    },[setNotes])
    return(
        <div className="mt-4 mx-4">
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    <div>
                        <Link to="/notes">
                            Notes
                        </Link>
                    </div>
                    <table className="w-full">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3">Topic</th>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                            {notes.map((note,index)=>{
                                return(  
                                    <tr  className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400" key={note._id} >
                                        <td className="px-4 py-3">
                                                <a href={`#${note._id}`}>

                                                <div>
                                                    <p className="font-semibold">{note.title}</p>
                                                </div>
                                                </a>

                                        </td>
                                        <td className="px-4 py-3 text-sm">{note.topic}</td>
                                        <td className="px-4 py-3 text-sm">{note.createdAt}</td>
                            
                                        <td className="px-4 py-3 text-sm">
                                            <form action={`/api/notes/delete/${note._id}?_method=DELETE`} method="POST" className="">
                                            <button type="submit"><i className="fas fa-trash"></i></button>
                                            </form>
                                        </td>
                                    </tr>
                                        
                                )
                            })}
                        </tbody>
                    </table>
                    {notes.map((note,index)=>{
                        const picture = note.image ? (
                        <a href={note.image} target="_blank">
                        <img 
                        width="100%"
                        height="100%"
                        src={note.image} 
                        className="w-full" 
                        alt="picture" 
                        />
                    </a>) :""
                                return(  
                                
                                        <div className="modal w-full h-full" id={note._id} key={+index+500}>
                                            <div className="modal-box dark:bg-gray-600">
                                                <h3 className="font-bold text-lg text-black dark:text-white">{note.title}</h3>
                                                <span className="text-black text-sm dark:text-white">{note.topic}</span>
                                                {picture}
                                                <div className="py-4 text-black dark:text-white">{note.content}</div>
                                                <div className="modal-action">
                                                        <a href="#" className="btn">Close</a>
                                                </div>
                                            </div>
                                        </div>
                                                  
                                )
                            })}
                </div>
            </div>
        </div>
    )
}