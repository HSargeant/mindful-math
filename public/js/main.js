
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
