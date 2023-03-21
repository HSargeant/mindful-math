import {Link} from "react-router-dom"
import image from "../images/40274.jpg"
import { useEffect } from "react"
import { useNavigate,useOutletContext } from "react-router-dom"
export default function Index() {
  const {user} =useOutletContext()
  const navigate=useNavigate()

  useEffect(()=>{
    if(user){
      navigate("/dashboard")
    }
  },[])
  return (
    <>
    <div className="w-full">

            <div className="flex bg-white h-screen">
                <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">Mindful <span className="text-blue-600 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Math</span></h2>
                        <p className="mt-3 text-base text-gray-900 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">Mindful Math is an online study aid that allows you to keep track of all your assignments, class notes, create and study flashcards, and gain access to resources from all over the web. Mindful Math will help you organize your academic life, ensuring that you never miss a piece of homework, or forget a lesson.</p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                              <Link to="/login" className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg">
                               Log In
                                </Link>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                              <Link to="/signup" className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-500 px-8 py-3 text-base font-medium text-white hover:bg-gray-600 md:py-4 md:px-10 md:text-lg">
                              
                                Sign Up
                                
                                </Link>
                            </div>
                          </div>
                    </div>
                </div>
                <div className=" lg:block lg:w-1/2" style={{clipPath:"polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"}}>
                    <div className="h-full object-cover" style={{background: `url(${image}) no-repeat`}}>
                        <div className="h-full bg-blue-500 opacity-10"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
