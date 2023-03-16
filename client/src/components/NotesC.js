import {Link} from "react-router-dom"
import { useEffect,useState } from "react"
import {API_BASE} from "../constants"
import DeleteIcon from '@mui/icons-material/Delete';

export default function NotesC(){
    const [notes,setNotes]= useState([])
    useEffect(()=>{
        const getData= async ()=>{
            const res = await fetch(API_BASE + '/api/notes/dashboard', { credentials: "include" } )
            const data = await res.json()
            setNotes(data)
        }
        getData()
    },[setNotes])

const handleDelete = async (event) => {
		event.preventDefault();
        console.log("Delete")
    // const confirm = window.confirm("Are you sure you want to delete this record?")
	// 	if(confirm){
    //   try{
    //     const form = event.currentTarget;
    //     await fetch(form.getAttribute('action'), {
    //       method: form.method,
    //       credentials: "include"
    //     });
    //     if(fromExamsPage){
    //       // navigate(0)
    //       setExams(exams.filter(exam=>exam._id!==examId))
    //     }else navigate("/exams")

    //   }catch(err){
    //     console.log(err)
    //     if(fromExamsPage){
    //       navigate(0)
    //     }else navigate("/exams")
    //   }
    // }else return

	};

  const createHTML=(text)=>{
    return {__html: text};
  }

    return(
        <div className="mt-4 mx-4 dark:bg-gray-800 rounded-t mb-0 px-0 border-0">
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              
              <div className="w-full overflow-x-auto">
                <div className="flex flex-wrap items-center px-4 py-2">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h3  className="font-semibold text-base text-gray-900 dark:text-gray-50">Notes</h3>
                  </div>
                  <div className="relative flex-grow flex-1">
                    <Link
                      to="/notes"
                      className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      See all
                    </Link>
                  </div>
                </div>
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      <th className="px-4 py-3">Title</th>
                      <th className="px-4 py-3">Topic</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    {
                        notes.map(note=>{
                            return(
                                <>
                                <tr className="text-gray-700 dark:text-gray-100">
                                    <td className="px-4 py-3">
                                    <a href={"#"+note._id} style={{display:"block",width:"100%"}}>
                                        
                                            <p className="font-semibold">{note.title}</p>
                                        
                                    </a>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        <a href={"#"+note._id} style={{display:"block",width:"100%"}}>
                                            {note.topic}
                                        </a>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                    <a href={"#"+note._id}>
                                        {new Date(note.createdAt).toDateString()}
                                    </a>
                                    </td>
                        
                                    <td className="px-4 py-3 text-sm">
                                    <form action={API_BASE+`/api/notes/delete/${note._id}?_method=DELETE`} method="POST" className="" onSubmit={handleDelete}>
                                        <button type="submit"><DeleteIcon/></button>
                                    </form>
                                    </td>
                                </tr>
                                    {/* <!-- note modal -->
                                    <!-- note modal --> */}
                                <div className="modal w-full h-full" id={note._id}>
                                    <div className="modal-box dark:bg-gray-600">
                                        <h3 className="font-bold text-lg text-black dark:text-white">{note.title}</h3>
                                        <span className="text-black text-sm dark:text-white">{note.topic}</span>
                                        <a href={note?.image} target="_blank"><img src={note?.image} className="w-full" /></a>
                                        <div dangerouslySetInnerHTML={createHTML(note.content)}className="py-4 text-black dark:text-white"></div>
                                        <div className="modal-action">
                                            <a href="#" className="btn">Close</a>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    )
}