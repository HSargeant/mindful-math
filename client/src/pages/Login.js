import {Link, useOutletContext,useNavigate} from "react-router-dom"
import { API_BASE } from "../constants"
export default function Login(){
  const {user,setUser,messages, setMessages} = useOutletContext()
    const image=()=>{
        const pictures = ["/images/pic1.png","/images/pic2.avif","/images/pic3.webp","/images/pic4.webp","/images/pic5.webp"]
        let index = Math.floor(Math.random()*pictures.length)
        return pictures[index]
    }
    const navigate=useNavigate()

    const handleSubmit = async (event) => {
      // setSeeError(false)
      event.preventDefault();
      try{
        const form = event.currentTarget;
        const response = await fetch(API_BASE + form.getAttribute('action'), {
          method: form.method,
          body: new URLSearchParams(new FormData(form)),
          credentials: "include"
        });
        const data = await response.json();
        if (data.messages.errors) {
          // console.log(data.messages.errors[0].msg)
          setMessages(data.messages.errors[0].msg);
          // setSeeError(true)
        }
        if (data.user) {
          setUser(data.user);
          navigate("/dashboard");
        }
      }catch(err){
        console.error(err)
      }
    };


    return (
        <>
        <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/5 heroBack" style={{backgroundImage: `url(${image()})`}}>
          </div>
          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
              <div className="w-full">
                  <h1 className="text-3xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                      Welcome Back
                  </h1>
    
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                  </p>
    
                  <div className="mt-6">
                      <h1 className="text-gray-600 dark:text-gray-300">Log In With Email Address</h1>
    
                      
                  </div>
                  {/* <% if (locals.messages.errors) { %> <% messages.errors.forEach( el => { %>
                    <div className="alert alert-danger"><%= el.msg %></div>
                    <% }) %> <% } %> <% if (locals.messages.info) { %> <% messages.info.forEach( el => { %>
                    <div className="alert alert-danger"><%= el.msg %></div>
                    <% }) %> <% } %> */}
    
                  <form action="/login" method="POST" onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 mb-10" >
                      <div>
                          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                          <input name="email" type="email" placeholder="name@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                      </div>
    
                      <div>
                          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                          <input name="password" type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                          {messages&&<div>{messages}</div>}
                      </div>
    
    
                      <button
                          className="flex items-center justify-between w-32 px-6 py-3 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-800 focus:ring-opacity-50" type="submit">
                          <span>Sign in </span>
    
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd" />
                          </svg>
                      </button>
                    </form>
                    
                    <p className ="mb-10">OR</p>
                      <Link to={API_BASE + "/auth/google"}>
                          <button
                              className="flex items-center justify-between px-6 py-3 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-800 focus:ring-opacity-50">
                              <i className="fa-brands fa-google"></i>
                              <span className="pl-2 text-xs md:text-base">Use google account </span>
                        </button>
                      </Link>
                      <div className="my-10 col s8 offset-s2 m6 offset-m3 l6 offset-l3 input-field">
                        Need an Account? 
                        <Link to="/signup" className="black-text width-100 underline">
                         Sign up
                          </Link>
                    </div>
                    <div className="fixed z-50 top-10 right-8 w-15 h-15 rounded-full flex justify-center items-center text-4xl">
                      <Link to="/" className="black-text width-100 float-right">
                    
                        <i className="fa-sharp fa-solid fa-house fa-lg"></i> 
    
                        
                      </Link>
                    </div>
              </div>
          </div>
      </div>
    </section>
        </>
      )
    }