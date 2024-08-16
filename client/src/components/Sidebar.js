import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LaptopIcon from '@mui/icons-material/Laptop';
import HomeIcon from '@mui/icons-material/Home';
import StyleIcon from '@mui/icons-material/Style';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from "react-router-dom";

export default function Sidebar(){
    return(
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
            <a href="https://hendersonsargeant.netlify.app" target="_blank" className="profile ml-1" rel="noopener noreferrer">
                Henderson Sargeant
            </a ><br/>
                All rights reserved 2022</p>
        </div>
    </div>
    )
}