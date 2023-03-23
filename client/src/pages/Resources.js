import Main from "../components/Main"
import { useState } from "react"
import {Link,useNavigate,useOutletContext} from "react-router-dom"
import { API_BASE,links } from "../constants"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Resources(){
    const {user} = useOutletContext()
    const navigate=useNavigate()
    const [userLevel,setUserLevel]=useState(user?.gradeLevel||"")
    const [linkOption,setLinkOption] = useState("")
    const handleGradeChange= async (e)=>{
        e.preventDefault()
        setUserLevel(e.target.value)
        if(e.target.value==='') return
        try {
            const response = await fetch(API_BASE + "/api/dashboard/updategrade", {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                gradeLevel:e.target.value,
            }),
            credentials: "include",
            });
        } catch (err) {
            console.log("Error:" + err);
            navigate("/resources")
        }
    }
    const options = [
        {value: '', text: 'Choose your grade/subject'},
        {value: 'Kindergarten', text: 'Kindergarten'},
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

    return(
        <Main>
             <div className="mt-4 mx-4 grid place-items-center">
            <div className="p-2 text-center quote overflow-hidden">
                <h2 className="text-4xl">Resources</h2>
                <h5><i className="fa-solid fa-person-digging"></i>--Under Contruction--<i className="fa-solid fa-person-digging"></i></h5>              
            </div>
            <section className="flex justify-center overflow-hidden" >
     
                <FormControl sx={{ m: 1, minWidth: 120, width:200 }} >
        <InputLabel id="demo-simple-select-helper-label"  className="dark:text-gray-200 text-black">Choose Grade Level</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={userLevel||'Choose your grade/subject'}
          label="Choose Grade Level"
          onChange={handleGradeChange}
          
          className="dark:text-gray-200 text-black"
          
        >
               {   
                    options.map(option=><MenuItem value={option?.value}>{option?.text}</MenuItem>)
                }
        </Select>
      </FormControl>
{/*  */}
      <FormControl sx={{ m: 1, minWidth: 120 }} >
        <InputLabel id="demo-simple-select-helper-label1" className="dark:text-gray-200 text-black">Choose Topic</InputLabel>
        <Select
          id="demo-simple-select-helper-label1"
          label="Select a Topic"
          onChange={(e)=>setLinkOption(e.target.value)}
          
          className="dark:text-gray-200 text-black"
          value={linkOption}
        >
              {   
                    links[userLevel]?.topics.map(topic=><MenuItem value={topic}>{topic}</MenuItem>)
                }
        </Select>
      </FormControl>
               
            </section>
           
                <div className="w-full md:w-2/3 sm:w-full  overflow-hidden rounded-lg shadow-xs">
                    <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                        <div className="rounded-t mb-0 px-0 border-0">
                            <div className="flex flex-wrap items-center px-4 py-2">
                                <div className="relative w-full max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">Resources</h3>
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
                                                Links
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-gray-700 dark:text-gray-100">
                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left">
                                                KhanAcademy.com
                                            </th>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 whitespace-nowrap p-4" id="khanTopicLink">
                                                {
                                                    links[userLevel]?.khan[linkOption]&&<a href={links[userLevel].khan[linkOption]} target="_blank">click here</a>
                                                }
                                            </td>
                                        </tr>
                                        <tr className="text-gray-700 dark:text-gray-100">
                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left">
                                                {/* enter site  */}
                                                IXL.com
                                            </th>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 whitespace-nowrap p-4" id="ixlTopicLink">
                                            {   
                                                    links[userLevel]?.ixl[linkOption]&&<a href={links[userLevel].ixl[linkOption]} target="_blank">click here</a>
                                                }
                                            </td>
                                        </tr>
                                        <tr className="text-gray-700 dark:text-gray-100">
                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left">
                                                {/* enter site  */}
                                                CK12.org
                                            </th>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 whitespace-nowrap p-4" id="ck12Link">
                                                
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </Main>
    )
}