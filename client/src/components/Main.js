import { useState, useEffect,useRef } from "react";
import {Link} from "react-router-dom";
import {useOutletContext} from "react-router-dom"
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LaptopIcon from '@mui/icons-material/Laptop';
import HomeIcon from '@mui/icons-material/Home';
import StyleIcon from '@mui/icons-material/Style';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import avatar from "../images/dummy-avatar.jpg"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddTaskModal from "./AddTaskModal";

export default function Main({children,setItems,items}){
    const {user}= useOutletContext()
    const [dark,setDark] = useState(localStorage.getItem("theme")==="dark")
useEffect(()=>{
    if(typeof window.document!=undefined){
        if(!localStorage.getItem("theme")){
            localStorage.setItem("theme","dark")
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
    localStorage.getItem("theme")=="dark" ? localStorage.setItem("theme","light") : localStorage.setItem("theme","dark")
    setDark(!dark)
    


}

    return (
        <>
            <div className={dark? "dark": ""} id="mainBody">
                <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
                {/* <!-- Header --> */}
                    <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
                        <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
                            
                        <img className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src={user?.image||avatar } alt={""} layout="fill"/>

                            <span className="hidden md:block"></span>
                        </div>
                        <div className="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
                            <div className="">
                            
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
                                        <HomeIcon fontSize="small"/>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                                        
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/assignments"className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        

                                        <span className="inline-flex justify-center items-center ml-4">
                                        <ContentPasteIcon fontSize="small"/>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Assignments</span>
                                        
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/notes" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                   

                                    <span className="inline-flex justify-center items-center ml-4">
                                    < ArticleIcon fontSize="small"/>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Notes</span>
                                    
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/flashcards" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                       
                                        <span className="inline-flex justify-center items-center ml-4">
                                        <StyleIcon fontSize="small"/>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Flashcards</span>
                                        
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/resources" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                    
                                        <span className="inline-flex justify-center items-center ml-4">
                                        <LaptopIcon fontSize="small"/>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">
                                        Resources<br />
                                        
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
                                       
                                       <PersonIcon fontSize="small"/>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Profile</span>

                                       
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        

                                        <span className="inline-flex justify-center items-center ml-4">
                                       <SettingsIcon fontSize="small"/>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
                                        
                                    </Link>
                                </li>
                            </ul>
                            <p className="mb-14 px-5 py-3  hidden md:block text-center text-xs">
                            &copy; 
                            <a href="https://hendersonsargeant.netlify.app" target="_blank" className="profile ml-1">
                                Henderson Sargeant
                            </a ><br/>
                                All rights reserved 2022</p>
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
            <AddTaskModal setItems={setItems} items={items}/>

            
            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer />
        </>
    )
}