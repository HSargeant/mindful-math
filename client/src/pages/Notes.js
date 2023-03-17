import Main from "../components/Main"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { API_BASE } from "../constants";
import AddIcon from '@mui/icons-material/Add';

// const cache={}
export default  function Notes(){
    const [notes,setNotes]= useState([])
    useEffect(() => {
   
        const getData= async ()=>{
            const res= await fetch(API_BASE + "/api/notes",{credentials:"include"})
            const data= await res.json()
            // cache["/api/notes"]=JSON.stringify(data)
            setNotes(data)
        }
        // if(cache["/api/notes"]){
        //     console.log("parse",JSON.parse(cache["/api/notes"]))
        //     setNotes(JSON.parse(cache["/api/notes"]))
        //     return
        // }else{
            getData()

        // }
      }, []);

    function getParsedDate(str) {
        let x = new Date(str);
        return x.toDateString();
    }
    function howmanyNotes(num) {
        if (notes.length == 1) {
            return <h3 className="page-title">You have 1 note</h3>;
        }
        if (notes.length == 0) {
            return <h3 className="page-title">Add a Note</h3>;
        }
        if (notes.length > 1) {
            return <h3 className="page-title">You have {notes.length} notes</h3>;
        }
    }
    const handleDelete=()=>{

    }
    return(
        <Main>
            <Link to="/notes/new"  id="addNote" className="fixed z-50 bottom-10 right-8 bg-blue-500 w-16 h-16 rounded-full flex justify-center items-center text-white hover:bg-blue-600 text-4xl">
                <AddIcon fontSize="large"/>
            </Link>
            <div className="p-2 text-center quote">
                <h2 className="text-4xl">Class Notes</h2>
                {/* {howmanyNotes()} */}
            </div>
            <section className="search flex justify-center">
                <input id="search" type="search" placeholder="Search Notes" />
            </section>
            <div className="mt-4 mx-4">
                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">Title</th>
                                    <th className="px-4 py-3">Topic</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Edit</th>
                                    <th className="px-4 py-3">Delete</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                {notes.map((note) => {
                                    return (
                                        <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400" key={notes._id}>
                                            <td className="px-4 py-3">
                                                <a href={`/notes/#${note._id}`}>
                                                    <div>
                                                        <p className="font-semibold">{note.title}</p>
                                                    </div>
                                                </a>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                <Link to={`/notes/#${note._id}`}>
                                                    <a>{note.topic}</a>
                                                </Link>
                                            </td>
                                            <td className="px-4 py-3 text-sm">{getParsedDate(note.createdAt)}</td>

                                            <td className="px-4 py-3 text-sm">
                                                <Link to={`/notes/edit/${note._id}`}>
                                                    <a><i className="fas fa-edit"></i></a>
                                                </Link>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                <form action={`/notes/delete/${note._id}?_method=DELETE`} method="POST" className="" onSubmit={handleDelete}>
                                                    <button type="submit">
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <!-- note modal --> */}
            {notes.map((note,index)=>{
                const picture = note.image && (
                    <a href={note.image} target="_blank">
                        <img 
                        width="100%"
                        height="100%"
                        src={note.image} 
                        className="w-full" 
                        alt={"picture"} 
                        />
                    </a>)
                return(  
                    <div className="modal w-full h-full" id={note._id} key={+index+500}>
                        <div className="modal-box dark:bg-gray-600">
                            <h3 className="font-bold text-lg text-black dark:text-white">{note.title}</h3>
                            <span className="text-black text-sm dark:text-white">{note.topic}</span>
                            {picture}
                            <div dangerouslySetInnerHTML={{__html: note.content}} className="py-4 text-black dark:text-white"></div>
                            <div className="modal-action">
                                <a href="#" className="btn">Close</a>
                            </div>
                        </div>
                    </div>              
                )
            })}
        </Main>
    )
}