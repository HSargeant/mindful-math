import { useState, useEffect,useRef } from "react";
import {Link} from "react-router-dom";
import {useOutletContext} from "react-router-dom"

export default function Main({children}){
    const {user}= useOutletContext()
    const main = useRef(null)
    const [dark,setDark] = useState(true)
    console.log("main: ",main.current?.classList)
    
    const showImage=()=>{
        if(user) {
          return <img className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src={user.image} alt={""} layout="fill"/>
        }else{
          return <img className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" alt={""} layout="fill"/>
        }
      }

    const options = [
        {value: '', text: 'Choose your grade/subject'},
        {value: 'kindergarten', text: 'Kindergarten'},
        {value: '1st Grade', text: '1st Grade'},
        {value: '2nd Grade', text: '2nd Grade'},
        {value: '3rd Grade', text: '3rd Grade'},
        {value: '4th Grade', text: '4th Grade'},
        {value: '5th Grade', text: '5th Grade'},
        {value: '6th Grade', text: '6th Grade'},
        {value: '7th Grade', text: '7th Grade'},
        {value: '8th Grade', text: '8th Grade'},
        {value: 'Algebra 1', text: 'Algebra 1'},
        {value: 'Geometry', text: 'Geometry'},
        {value: 'Algebra 2', text: 'Algebra 2'},
        {value: 'Pre-Calculus', text: 'Pre-Calculus'},
      ];
      const [selected, setSelected] = useState(options[0].value);
      const handleChange = event => {
        setSelected(event.target.value);
      };

useEffect(()=>{
    if(typeof window.document!=undefined){
        let main=  window.document.querySelector(".dark")

    
        if(localStorage.getItem("theme")=="light"){
            main?.classList.remove("dark")
            setDark(false)

    
        }else{
            main?.classList.add("dark")
            setDark(true)
        }
    
    let modal = window.document.getElementById("modal");
    // let notesModal = document.getElementById("notesModal");
    
    if(window.document.querySelector('#addTask')){
    window.document.querySelector('#addTask').addEventListener('click',()=>{
        modalHandler(true)
    
    
    })
    }
    window.document.querySelector('#modalCancel').addEventListener('click',()=>{
    modalHandler()
    })
    
    function modalHandler(val) {
                    if (val) {
                        fadeIn(modal);
                    } else {
                        fadeOut(modal);
                    }
                }
                function fadeOut(el) {
                    window.document.body.style.overflow = '';
                    el.style.opacity = 1;
                    (function fade() {
                        if ((el.style.opacity -= 0.1) < 0) {
                            el.style.display = "none";
                        } else {
                            requestAnimationFrame(fade);
                        }
                    })();
                }
                function fadeIn(el, display) {
                    window.document.body.style.overflow = 'hidden';
    
                    el.style.opacity = 0;
                    el.style.display = display || "flex";
                    (function fade() {
                        let val = parseFloat(el.style.opacity);
                        if (!((val += 0.2) > 1)) {
                            el.style.opacity = val;
                            requestAnimationFrame(fade);
                        }
                    })();
                }
      }

},[])
const handleLightDark=()=>{
    setDark(!dark)


}

    return (
        <>
            <div className={dark? "dark": ""} id="mainBody" ref={main} >
                <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
                {/* <!-- Header --> */}
                    <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
                        <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
                            
                            {showImage()}

                            <span className="hidden md:block"></span>
                        </div>
                        <div className="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
                            <div className="bg-white rounded flex items-center text-black max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
                                <form action="/dashboard/updategrade?_method=PUT" method="POST">
                                    <select id="grade-input" name="gradeLevel" value={selected} onChange={handleChange}>
                                        {options.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.text}
                                            </option>
                                        ))}
                                    </select>
                                </form>
                            </div>
                            <ul className="flex items-center">
                                    {/* <!-- light /dark toggle --> */}
                                <li>
                                    <button aria-hidden="true" className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none" id="toggle"
                                    onClick={handleLightDark}>
                                        {dark ? <svg
                                        width="24"
                                        height="24"
                                        className="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700 dark-svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke=""
                                  
                                        >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                        />
                                        </svg> :
                                        <svg
                                        width="24"
                                        height="24"
                                        className="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700 light-svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke=""
                                     
                                        >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>}
                                    </button>
                                </li>
                                    {/* <!--  --> */}
                                <li>
                                    <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
                                </li>
                                <li>
                                        <Link to="/logout" className="flex items-center mr-4 hover:text-blue-100" >
                                        <span className="inline-flex mr-1">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                        </svg>
                                        </span>
                                        <span className="tracking-wide truncate">
                                        Logout
                                        </span>
                                        </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- ./Header -->

                    <!-- Sidebar --> */}
                    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
                        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                            <ul className="flex flex-col py-4 space-y-1">
                                <li className="px-5 hidden md:block">
                                    <div className="flex flex-row items-center h-8">
                                        <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/dashboard" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        ></path>
                                        </svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                                        
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/agenda"className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        

                                        <span className="inline-flex justify-center items-center ml-4">
                                        <i className="fa-solid fa-clipboard-list"></i>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Agenda</span>
                                        
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/notes" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                   

                                    <span className="inline-flex justify-center items-center ml-4">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                                    />
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
                                    />
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
                                    />
                                    </svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Notes</span>
                                    
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/flashcards" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                       
                                        <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                        d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"
                                        />
                                        <path
                                        d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"
                                        />
                                        </svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Flashcards</span>
                                        
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/resources" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                    
                                        <span className="inline-flex justify-center items-center ml-4">
                                        <i className="fa-solid fa-laptop"></i>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">
                                        Resources<br />
                                        (coming soon)
                                        </span>
                                        
                                    </Link>
                                </li>
                                <li className="px-5 hidden md:block">
                                    <div className="flex flex-row items-center mt-5 h-8">
                                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
                                    </div>
                                </li>
                                <li>
                                    <Link to="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                       
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Profile</span>

                                       
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        

                                        <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        ></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
                                        
                                    </Link>
                                </li>
                            </ul>
                            <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
                            &copy; 
                            <a to="https://hendersonsargeant.netlify.app" target="_blank" className="profile">
                                Henderson Sargeant
                            </a>
                                All rights reserved. 2022</p>
                        </div>
                    </div>
                    {/* <!-- ./Sidebar --> */}
                    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
{children}
                    </div>
                    {/* <!-- adding footer below --> */}
                </div>
            </div>
            {/* <!-- modal --> */}

            <div className="hidden py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                        <form action="/dashboard/addTask" method="POST">
                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Add an Assignment</h1>
                            <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Title</label>
                            <input
                            id="name"
                            name="taskItem"
                            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-gray-50"
                            />
                            <label htmlFor="dueDate" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Due Date</label>
                            <div className="relative mb-5 mt-2">
                                <input
                                id="dueDate"
                                name="dueDate"
                                type="date"
                                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-1/2 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-gray-50"
                                />
                            </div>

                            <div className="flex items-center justify-start w-full">
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>

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
            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer />
        </>
    )
}