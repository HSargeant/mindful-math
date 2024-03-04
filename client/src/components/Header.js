import avatar from "../images/dummy-avatar.jpg"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import {useOutletContext} from "react-router-dom"

export default function({dark,handleLightDark}){
    const user = JSON.parse(window.localStorage.getItem("user"))
    // const {user}= useOutletContext()

    return(
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

    )
}