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


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});