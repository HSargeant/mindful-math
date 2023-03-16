import {Link} from "react-router-dom"
import { useEffect,useState } from "react"
import {API_BASE} from "../constants"
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorIcon from '@mui/icons-material/Error';

export default function TaskC(){
    const [items,setItems]= useState([])
    useEffect(()=>{
        const getData= async ()=>{
            const res = await fetch(API_BASE + '/api/tasks/dashboard', { credentials: "include" } )
            const data = await res.json()
            // console.log("tasks: ", data)
            setItems(data)
        }
        getData()
    },[setItems])
return(
        <div  className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
            <div className="rounded-t mb-0 px-0 border-0">
                <div className="flex flex-wrap items-center px-4 py-2">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                        <h3  className="font-semibold text-base text-gray-900 dark:text-gray-50">Agenda Items</h3>
                    </div>
                    <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                        <Link
                        to="/assignments"
                        className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"

                        >
                        See all
                        </Link>
                    </div>
                    <div className="relative w-full max-w-full flex-grow flex-1 text-right">
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
                                Title
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
                            {(new Date()>new Date(item.dueDate))?<button className="text-red-600 ml-1" aria-label="Overdue"><ErrorIcon /></button>:""}
                            </td>
                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                                <div className="flex flex-col">
                                    <form action={`dashboard/${item._id}?_method=PUT`} method="POST" className="">
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
    )
}