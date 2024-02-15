import { useState, useEffect } from "react";
import {useOutletContext} from "react-router-dom"
import AddTaskModal from "./AddTaskModal";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Main({children,items}){
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
                    <Header dark={dark} handleLightDark={handleLightDark} />
                    <Sidebar />
                    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
                        {children}
                    </div>
                    {/* <!-- adding footer below --> */}
                </div>
            </div>
            {/* <!-- modal --> */}
            <AddTaskModal  items={items}/>
            {/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer /> */}
        </>
    )
}