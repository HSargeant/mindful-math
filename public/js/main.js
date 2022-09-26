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