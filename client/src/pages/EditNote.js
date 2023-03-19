import {Link,useNavigate,useLocation,useParams} from "react-router-dom"
import { useEffect,useState } from "react"
import Main from "../components/Main"
import { API_BASE } from "../constants";

export default function EditNote(){
    const navigate=useNavigate()
    const noteId=useParams().id
    const [title, setTitle] = useState("");
    const [topic, setTopic] = useState("");
    const [content, setContent] = useState("");

    useEffect(()=>{
        const getData= async ()=>{
            console.log("getting")
            const res= await fetch(API_BASE + "/api/notes/edit/"+noteId,{credentials:"include"})
            const data= await res.json()
            setTitle(data?.title)
            setContent(data?.content)
            setTopic(data?.topic)
        }
        getData()
    },[])

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const form = event.currentTarget;
            const response = await fetch(API_BASE + "/api/notes/update/"+noteId, {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title:title,
                    topic: topic,
                    content: content,
                }),
                credentials: "include"
              })
            const record = await response.json();
            console.log(record)
            navigate(-1)
        }catch(err){
            console.log("Error:" ,err)
        }
		// if (data.messages) setMessages(data.messages);
   
    };

        const [file, setFile] = useState(null);
        const handleFileChange = (event) => {
        //   console.log(event.target.files[0].name)
        setFile(event.target.files[0].name);
        };
    return(
        <Main>
        <div className="flex items-center justify-center p-12">
  <div className="mx-auto w-full max-w-[550px]">
    <form action={`/api/notes/update/${noteId}`}  encType="multipart/form-data"  className="modalForm" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          htmlFor="title"
          className="mb-3 block text-black text-gray-800 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          id="name"
          className="w-full rounded-md border border-blue-500 bg-white py-3 px-6 text-black font-medium outline-none focus:border-[#6A64F1] focus:shadow-md "
          onChange={(e)=>setTitle(e.target.value)}
          required
          value={title}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="topic"
          className="mb-3 block text-black text-gray-800 dark:text-white"
        >
          Topic
        </label>
        <input
          type="text"
          name="topic"
          id="noteTopic"
          className="w-full rounded-md border border-blue-500 bg-white py-3 px-6 text-black font-medium outline-none focus:border-[#6A64F1] focus:shadow-md "
          onChange={(e)=>setTopic(e.target.value)}
          required
          value={topic}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="content"
          className="mb-3 block text-black text-gray-800 dark:text-white"
        >
          Content
        </label>
        <textarea
          rows="4"
          name="content"
          id="content"
          placeholder="Enter notes or a discription of the content uploaded here"
          className="w-full rounded-md border border-blue-500 bg-white py-3 px-6 text-black font-medium outline-none focus:border-[#6A64F1] focus:shadow-md resize-none"
          onChange={(e)=>setContent(e.target.value)}
          required
          value={content}
        ></textarea>
      </div>
      {/* <div className="mb-5">
        <label
          htmlFor="file"
          className="mb-3 block text-black text-gray-800 dark:text-white"
        >
          Upload Image?
        </label>
        <input
          type="file"
          name="file"
          accept="image/*"
          className="file:rounded-md text-black dark:text-white font-medium outline-none"
          onChange={handleFileChange}
        />
      </div> */}
      <div className="flex justify-end">
        <button
        type="submit"
          className=" hover:shadow-form rounded-md bg-blue-500 py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
        <Link to="/notes">
        
          
          <button  className=" ml-6 hover:shadow-form rounded-md bg-gray-400 py-3 px-8 text-base font-semibold text-white outline-none">

          Cancel
          </button>

      </Link>
      </div>

    </form>
  </div>
</div>

    </Main>
    )
}