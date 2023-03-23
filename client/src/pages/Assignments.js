import Main from "../components/Main"
import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { API_BASE } from "../constants";
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorIcon from '@mui/icons-material/Error';
import { IconButton,Tooltip } from "@mui/material";

export default function Assignments(){
    const navigate=useNavigate()
    const [items,setItems]= useState([])
    useEffect(()=>{
        const getData= async ()=>{
            const res = await fetch(API_BASE + '/api/assignments/', { credentials: "include" } )
            const data = await res.json()
            setItems(data)
        }
        getData()
    },[setItems])

    function howmanyTasks() {
        if (items.length == 1) {
            return <h3 className="page-title">You have 1 assignment</h3>;
        }
        if (items.length == 0) {
            return <h3 className="page-title">Add an assignment</h3>;
        }
        if (items.length > 1) {
            return <h3 className="page-title">You have {items.length} assignments</h3>;
        }
    }
    function filterTasks(e){ 
        let tasks=window.document.querySelectorAll('.item')
        let filter = e.currentTarget.value.toUpperCase();
        let title = window.document.querySelectorAll('.title')
        let date = window.document.querySelectorAll('.date')
        
        for (let i = 0; i < tasks.length; i++) {
            let noteTitle=title[i].innerText.toUpperCase().indexOf(filter)>-1
            let noteDate=date[i].innerText.toUpperCase().indexOf(filter)>-1

            if (noteTitle||noteDate) {
                tasks[i].style.display = "";
            } else {
                    tasks[i].style.display = "none";
            }
        }
    }
    const handleDelete = async (event,item) => {
		event.preventDefault();
        console.log(event.target.className)
        const confirm = window.confirm("Mark Complete?")
		if(confirm){
            try{
                const form = event.currentTarget;
                await fetch(API_BASE + form.getAttribute('action'), {
                    method: form.method,
                    credentials: "include"
                }); 
                setItems(items.filter(elem=>elem._id!==event.target.className))
            }catch(err){
                console.log(err)
                navigate("/agenda")
            }
        }else return

	};
    return(
        <Main setItems={setItems} items={items}>
<div className="p-2 text-center quote">
							<h2 className="text-4xl">Class Notes</h2>
							{howmanyTasks()}
					</div>
					<section className="mx-auto w-3/4 ">
							<input id="search" className="bg-transparent " type="search" placeholder="Search Assignments" onKeyUp={filterTasks} />
					</section>
                    <div  className="relative flex flex-col min-w-0 mb-4 mt-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 lg:w-3/4 sm:w-full mx-auto shadow-lg rounded">
            <div className="rounded-t mb-0 px-0 border-0">
                <div className="flex flex-wrap items-center px-4 py-2">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                        <h3  className="font-semibold text-base text-gray-900 dark:text-gray-50">Assignments</h3>
                    </div>
       
                    <div className="relative w-full max-w-full flex-grow flex-1 ">
                        <button
                        className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        id="addTask"
                        >
                        Add
                        </button>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th
                                className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                >
                                Name
                                </th>
                                <th
                                className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                >
                                Due Date
                                </th>
                                <th
                                className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"
                                >
                                Complete?
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item,i)=>{
                            return(
                            <tr key={item._id} className="text-gray-700 dark:text-gray-100">
                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left">{item.name}</th>
                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">{new Date(item.dueDate).toDateString()}
                            {(new Date()>new Date(item.dueDate))?<Tooltip title="Overdue" placement="top"><ErrorIcon className="text-red-600 ml-2"/></Tooltip>:""}
                            </td>
                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                                <div className="flex flex-col">
                                    <form action={`/api/assignments/${item._id}?_method=PUT`} method="POST" className={item._id} onSubmit={handleDelete}>
                                    <button type="submit" className="white"><DeleteIcon/></button>
                                    </form>
                                </div>
                            </td>
                            </tr>
                            )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </Main>
    )
}