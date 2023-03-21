import { useState, useEffect} from 'react';
import CK from '../components/CK';
import { API_BASE } from '../constants';
import { useNavigate,useLocation} from 'react-router-dom';
import Main from "../components/Main"

export default function EditFlashcard(){
    const card = useLocation().state?.card
    // console.log(card)
    const navigate=useNavigate()
    useEffect(() => {
        if(!card){
            navigate("/flashcards")
            return
        }
        setEditorLoaded(true);
      }, []);
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [answer, setAnswer] = useState();
    const [topic,setTopic]=useState(card?.topic)
    const [question,setQuestion]=useState(card?.question)
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const form = event.currentTarget;
            console.log(form.topic.value)
            console.log(form.method)
            
            const response = await fetch(API_BASE + form.getAttribute("action"), {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                question:form.question.value,
                topic:form.topic.value,
                answer:answer
         
            }),
            credentials: "include",
            });
            navigate("/flashcards")
         
        } catch (err) {
            console.log("Error:" + err);
            navigate("/flashcards")
        }
    };
    return (
        <Main>
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
                <form action={`/api/flashcards/edit/${card?._id}`} id="add-question-card" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="question" className="mb-3 block text-base font-medium text-[#07074D] dark:text-white">
                            Question
                        </label>
                        <input
                            type="text"
                            name="question"
                            id="name"
                            placeholder="Enter question here.."
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-500 focus:shadow-md"
                            defaultValue={card?.question}
                        />
                    </div>
                    <div className="mb-5">
                    <label htmlFor="answer" className="mb-3 block text-base font-medium text-[#07074D] dark:text-white">
                        Answer
                    </label>
                    <CK
                        setAnswer={setAnswer}
                        editorLoaded={editorLoaded}
                        defaultValue={card?.answer}

                    />
       {/* {JSON.stringify(data)} */}
                        {/* <textarea
                            rows="4"
                            name="answer"
                            id="answer"
                            placeholder="Type your message"
                            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-black outline-none focus:border-[#6A64F1] focus:shadow-md"

                        ></textarea> */}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="topic" className="mb-3 block text-base font-medium text-[#07074D] dark:text-white">
                            Topic
                        </label>
                        
                        <input
                            type="text"
                            name="topic"
                            id="topic"
                            placeholder="Enter your topic"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            defaultValue={card?.topic}
                        />
                    </div>
                    <div>
                        <button className="hover:shadow-form rounded-md bg-blue-500 py-3 px-8 text-base font-semibold text-white outline-none" type="submit">
                            Submit
                        </button>
                        <button id="close-btn" className="hover:shadow-form rounded-md bg-gray-500 py-3 px-8 text-base font-semibold text-white outline-none" type="button">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </Main>
    )
}