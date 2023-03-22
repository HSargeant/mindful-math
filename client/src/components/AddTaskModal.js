import { API_BASE } from "../constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function AddTaskModal({setItems,items}){
    const navigate=useNavigate()
    const [title, setTitle] = useState("")
    const [dueDate,setDueDate] = useState("")
    const [added,setAdded]= useState(false)
 
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const form = event.currentTarget;
            const x = new FormData(form)
            let dateString = dueDate;
            let date = new Date(dateString + 'T12:00:00Z');
            const response = await fetch(API_BASE + form.getAttribute("action"), {
                method: form.method,
                body: JSON.stringify({"item":title,"dueDate":date}),
                headers: { 'Content-Type': 'application/json' },
                credentials: "include",
            });
            const data = await response.json();
            setItems([data,...items])
            setAdded(true)
            setTimeout(() => {
                setAdded(false)
            }, 3000);

            } catch (err) {
              console.log("Error:" + err);
            }
            // if (data.messages) setMessages(data.messages);
  
        };
          
    return(
        <div className="hidden py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                   
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                        <form action="/api/assignments/addtask" method="POST" onSubmit={handleSubmit} >
                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Add an Assignment</h1>
                            {added&&<p>Assignment Added</p>}
                            <label htmlFor="taskItem" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Title</label>
                            <input
                            id="name"
                            name="taskItem"
                            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-gray-50"
                            onChange={(e)=>setTitle(e.target.value)}
                            type="text"
                            />
                            <label htmlFor="dueDate" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Due Date</label>
                            <div className="relative mb-5 mt-2">
                                <input
                                id="dueDate"
                                name="dueDate"
                                type="date"
                                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-1/2 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-gray-50"
                                onChange={(e)=>setDueDate(e.target.value)}
                                // value={new Date()}

                                />
                            </div>

                            <div className="flex items-center justify-start w-full">
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm" type="submit">Submit</button>

                                <button
                                type="button"
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                                id="modalCancel"
                                >
                                Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}