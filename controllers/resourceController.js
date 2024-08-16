const Cards = require('../models/Flashcard')
const Notes = require("../models/Note")
const Tasks = require("../models/Task")

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = {
    getResources: async (req, res) => {
        try {
            res.json(links);
        } catch (err) {
            console.log(err);
        }
    },
    chatReponse: async (req, res) => {
        const question = req.body?.question + ` :Explain for a student in ${req.user?.gradeLevel}`
        // console.log(question)
        // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const result = await model.generateContent(question);
        const response = await result.response;

        let postResponse ={"question":question,"response":response.text()}
        // const text = response.text();
        // console.log(text);
        res.send(postResponse)
    }
};