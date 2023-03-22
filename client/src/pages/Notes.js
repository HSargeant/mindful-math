import Main from "../components/Main"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { API_BASE } from "../constants";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


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
    function howmanyNotes() {
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
		const handleDelete = async (event) => {
			event.preventDefault();
			const confirm = window.confirm("Are you sure you want to delete this note?")
			if(confirm){
				try{
					// const form = event.currentTarget;
					// await fetch(form.getAttribute('action'), {
					//   method: form.method,
					//   credentials: "include"
					// });  
					setNotes(notes.filter(elem=>elem._id!==event.target.className))
	 
				}catch(err){
					console.error(err)
				}
			}else return
	
		};
    const createHTML=(text)=>{
        return {__html: text};
      }
		function filterCards(e){ 
				let notes=window.document.querySelectorAll('.notes')
				let filter = e.currentTarget.value.toUpperCase();
				let title = window.document.querySelectorAll('.title')
				let topic = window.document.querySelectorAll('.topic')
				let date = window.document.querySelectorAll('.date')
				
				for (let i = 0; i < notes.length; i++) {
					let noteTitle=title[i].innerText.toUpperCase().indexOf(filter)>-1
					let noteTopic=topic[i].innerText.toUpperCase().indexOf(filter)>-1
					let noteDate=date[i].innerText.toUpperCase().indexOf(filter)>-1
		
					if (noteTitle ||noteTopic||noteDate) {
						notes[i].style.display = "";
					} else {
							notes[i].style.display = "none";
					}
				}
			}

    return(
        <Main>
					<Link to="/notes/new"  id="addNote" className="fixed z-50 bottom-10 right-8 bg-blue-500 w-16 h-16 rounded-full flex justify-center items-center text-white hover:bg-blue-600 text-4xl">
							<AddIcon fontSize="large"/>
					</Link>
					<div className="p-2 text-center quote">
							<h2 className="text-4xl">Class Notes</h2>
							{howmanyNotes()}
					</div>
					<section className="mx-auto w-3/4 ">
							<input id="search" className="bg-transparent " type="search" placeholder="Search Notes" onKeyUp={filterCards} />
					</section>
          <div className="mt-4 dark:bg-gray-800 rounded-t mb-0 px-0 border-0 lg:w-3/4 sm:w-full mx-auto">
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              
              <div className="w-full overflow-x-auto">
                <div className="flex flex-wrap items-center px-4 py-2">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h3  className="font-semibold text-base text-gray-900 dark:text-gray-50">Notes</h3>
                  </div>

                </div>
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    <th className="px-4 py-3">Title</th>
                                    <th className="px-4 py-3">Topic</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Edit</th>
                                    <th className="px-4 py-3">Delete</th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    {
                        notes.map(note=>{
                            return(
                          
                                <tr className="text-gray-700 dark:text-gray-100 notes" key={note._id}>
                                    <td className="px-4 py-3">
                                    <a href={"#"+note._id} style={{display:"block",width:"100%"}}>
                                      <p className="font-semibold title">{note.title}</p>
                                    </a>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        <a href={"#"+note._id} style={{display:"block",width:"100%"}}>
                                            <span className="topic">{note.topic}</span>
                                        </a>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                    <a href={"#"+note._id}>
                                        <span className="date">{new Date(note.createdAt).toDateString()}</span>
                                    </a>
                                    </td>
                        
                                    <td className="px-4 py-3 text-sm">
                                    <Link to={`edit/${note._id}`}>
                                        <EditIcon/>
                                    </Link>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                    <form action={API_BASE+`/api/notes/delete/${note._id}?_method=DELETE`} method="POST" className={note._id} onSubmit={handleDelete}>
                                        <button type="submit"><DeleteIcon/></button>
                                    </form>
                                    </td>
                                </tr>
                              
                            )
                        })
                    }
                  </tbody>
                </table>
              </div>
            </div>
            {/* <!-- note modal -->
          	<!-- note modal --> */}
            {notes.map((note,i)=>{
              return(
                <div className="modal w-full h-full" id={note._id} key={i}>
                  <div className="modal-box dark:bg-gray-600">
                      <h3 className="font-bold text-lg text-black dark:text-white">{note.title}</h3>
                        <span className="text-black text-sm dark:text-white">{note.topic}</span>
                      <a href={note?.image} target="_blank" alt="note image"><img src={note?.image} className="w-full" /></a>
                      <div dangerouslySetInnerHTML={createHTML(note.content)} className="py-4 text-black dark:text-white"></div>
                      <div className="modal-action">
                        <a href="#" className="btn">Close</a>
                      </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Main>
    )
}