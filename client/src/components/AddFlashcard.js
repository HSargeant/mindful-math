import { useState, useEffect} from 'react';
import CK from './CK';

export default function AddFlashcard(){
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [answer, setAnswer] = useState();
    const addCard=()=>{
        const addQuestionCard = window.document.getElementById("add-question-card");
        const container = window.document.querySelector(".container1");
        container.classList.toggle("hide");
        addQuestionCard.classList.toggle("hide");
        
    }
    useEffect(() => {
        setEditorLoaded(true);
      }, []);

    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
                <form action="/flashcards/create" method="POST" className="hide" id="add-question-card">
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
                            defaultValue=""
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="answer" className="mb-3 block text-base font-medium text-[#07074D] dark:text-white">
                            Answer
                        </label>
                        <CK
                name="description"
                onChange={(data) => {
                setAnswer(data);
                }}
                editorLoaded={editorLoaded}
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
                            defaultValue=""
                        />
                    </div>
                    <div>
                        <button className="hover:shadow-form rounded-md bg-blue-500 py-3 px-8 text-base font-semibold text-white outline-none" type="submit">
                            Submit
                        </button>
                        <button id="close-btn" className="hover:shadow-form rounded-md bg-gray-500 py-3 px-8 text-base font-semibold text-white outline-none" type="button" onClick={addCard}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}