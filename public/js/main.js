// let gradePick = document.querySelector("#grades")

// function setGrade(){
//     const grade=localStorage.getItem('grade')
//     gradePick.value= grade
// }

// async function getResources(){
//     localStorage.setItem('grade',this.value)
//     console.log("change")
//     console.log(this.value)
    
// }

// //functions to run on load
// setGrade()
// gradePick.addEventListener('change', getResources)

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     const selectInstances = M.FormSelect.init(elems); 
//     var img = document.querySelectorAll('.materialboxed');
//     const imageInstances = M.Materialbox.init(img);
// });
// document.addEventListener('DOMContentLoaded', function() {
    
//   });
  
// (async()=>{

// try{
//   console.log("asfasf")
//   const res = await fetch('https://zenquotes.io/api/quotes')
//   const data= await res.json()
//   console.log(data)
//   const index = Math.floor(Math.random()*data.length)
//   document.querySelector('.quoteP').innerText = data[index].q
//   document.querySelector('.quoteAuthor').innerText = `- ${data[index].a}`



// }catch(err){
//   console.log(err)
// }

// })()
let modal = document.getElementById("modal");
// let notesModal = document.getElementById("notesModal");

if(document.querySelector('#addTask')){
    document.querySelector('#addTask').addEventListener('click',()=>{
        modalHandler(true)
    
    
    })
}
document.querySelector('#modalCancel').addEventListener('click',()=>{
    modalHandler()



})


function modalHandler(val) {
                    if (val) {
                        fadeIn(modal);
                    } else {
                        fadeOut(modal);
                    }
                }
                function fadeOut(el) {
                    document.body.style.overflow = '';
                    el.style.opacity = 1;
                    (function fade() {
                        if ((el.style.opacity -= 0.1) < 0) {
                            el.style.display = "none";
                        } else {
                            requestAnimationFrame(fade);
                        }
                    })();
                }
                function fadeIn(el, display) {
                    document.body.style.overflow = 'hidden';

                    el.style.opacity = 0;
                    el.style.display = display || "flex";
                    (function fade() {
                        let val = parseFloat(el.style.opacity);
                        if (!((val += 0.2) > 1)) {
                            el.style.opacity = val;
                            requestAnimationFrame(fade);
                        }
                    })();
                }


const qs = document.querySelectorAll('.question')

qs.forEach(elem=>{
    elem.addEventListener('click',()=>{
        elem.nextElementSibling.classList.toggle("hidden")
    
      })
})
