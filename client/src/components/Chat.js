import { useState } from 'react';
import { API_BASE } from "../constants";


function ChatBot() {
  const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    let x = new FormData(form)
    console.log(form.getAttribute("action"))

    const post = await fetch(API_BASE + form.getAttribute("action"), {
        method: form.method,
        body: JSON.stringify({"question":userInput}),
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
      });
    
    // Simulate a bot response (replace with your actual logic)
    // setBotResponse(`Q:" ${userInput}"\n my response here`);
    // setUserInput('');

    const response = await post.json()
    setBotResponse(response.response)
  };

  return (
<div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[800px]">
          <form action="/api/resources/chat" method='POST' className="modalForm" onSubmit={handleSubmit}>
            {botResponse && <div className="mb-5">
              <label
                htmlFor="content"
                className="mb-3 block text-black text-gray-800 dark:text-white"
              >
                Response
              </label>
              <textarea
              resize
                rows="4"
                name="response"
                id="response"
                placeholder=""
                className="w-full rounded-md border border-blue-500 bg-white py-3 px-6 text-black font-medium outline-none focus:border-[#6A64F1] focus:shadow-md resize-y"
              >{botResponse}</textarea>
            </div>}
            <div className="mb-5">
              <label
                htmlFor="content"
                className="mb-3 block text-black text-gray-800 dark:text-white"
              >
                Question
              </label>
              <textarea
                rows="4"
                name="question"
                id="question"
                placeholder="Enter questions for the tutor here..."
                className="w-full rounded-md border border-blue-500 bg-white py-3 px-6 text-black font-medium outline-none focus:border-[#6A64F1] focus:shadow-md resize"
                onChange={handleChange}
                required
                value={userInput}
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className=" hover:shadow-form rounded-md bg-blue-500 py-3 px-8 text-base font-semibold text-white outline-none"
                onClick={()=>setBotResponse("")}
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
  );
}

export default ChatBot;