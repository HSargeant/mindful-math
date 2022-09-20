const container = document.querySelector(".container1");
const addQuestionCard = document.getElementById("add-question-card");
// const editQuestionCard = document.getElementById("edit-question-card");
const cardButton = document.getElementById("save-btn");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("add-flashcard");
const closeBtn = document.getElementById("close-btn");
const show = document.querySelectorAll(".show-hide-btn")
// const editQuestion = document.querySelector(".edit")


//Add question when user clicks 'Add Flashcard' button
addQuestion.addEventListener("click", () => {
  container.classList.add("hide");
  addQuestionCard.classList.remove("hide");
});
// editQuestion.addEventListener("click", () => {
//   container.classList.add("hide");
//   editQuestionCard.classList.remove("hide");
// });

show.forEach(x=>{
  x.addEventListener('click',()=>{
    x.nextElementSibling.classList.toggle("hide")

  })
})

//Hide Create flashcard Card
closeBtn.addEventListener(
  "click",
  (hideQuestion = () => {
    container.classList.remove("hide");
    addQuestionCard.classList.add("hide");
  })
);

// Submit Question
cardButton.addEventListener(
  "click",
  (submitQuestion = () => {
    const tempQuestion = question.value
    const tempAnswer = answer.value
    if (!tempQuestion || !tempAnswer) {
      errorMessage.classList.remove("hide");
    }
  })
);
