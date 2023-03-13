console.log(window.document)

if(typeof window.document!=undefined){
    let main=  window.document.querySelector(".dark")
    let tog =  window.document.querySelector("#toggle")
    let light = window.document.querySelector(".light-svg") 
    let dark = window.document.querySelector(".dark-svg")

    if(localStorage?.getItem("theme")=="light"){
        main?.classList.remove("dark")
        dark?.classList.add("hidden")
        light?.classList.remove("hidden")

    }else{
        main?.classList.add("dark")
        light?.classList.add("hidden")
        dark?.classList.remove("hidden")
    }

    tog?.addEventListener("click",()=>{
        console.log(localStorage?.getItem("theme"))
        main?.classList.toggle("dark",)
        if(main?.classList.value=="dark"){
        localStorage?.setItem("theme","dark")
        dark?.classList.remove("hidden")
        light?.classList.add("hidden")
        }else{
            localStorage?.setItem("theme","light")
            dark?.classList.add("hidden")
            light?.classList.remove("hidden")
        }
    })

let modal = window.document.getElementById("modal");
// let notesModal = document.getElementById("notesModal");

if(window.document.querySelector('#addTask')){
window.document.querySelector('#addTask').addEventListener('click',()=>{
    modalHandler(true)


})
}
window.document.querySelector('#modalCancel').addEventListener('click',()=>{
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
                window.document.body.style.overflow = '';
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
                window.document.body.style.overflow = 'hidden';

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
  }