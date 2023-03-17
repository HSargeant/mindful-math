import { useState } from "react";

export default function  Search(){
    const [searchTxt,setSearchTxt] = useState("");

    return (
        <section className="search "> 
            <input 
            id="search" 
            type="search" 
            placeholder="Filter cards" 
            className="bg-transparent color-black dark:color:white"
            onChange={(e)=>{
                setSearchTxt(e.target.value)}}
            value={searchTxt}
            />
        </section> 
    )
}