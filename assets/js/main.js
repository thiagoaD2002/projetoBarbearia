const observador = new IntersectionObserver((chamadas)=>{
    chamadas.forEach((chamada)=>{
        if(chamada.isIntersecting){
            chamada.target.classList.add('show')
        } 
        else{
            chamada.target.classList.remove("show")
        }
    })

}, {})

const todosElementos = document.querySelectorAll(".todo")
todosElementos.forEach(el => observador.observe(el))


// EFEITO MENU HAMBURGUER

const menuHamburguer = document.querySelector(".menuHamburguer") 
const menuOptions = document.querySelector(".menuOptions")
const hideSite = document.querySelectorAll(".hide")
const body = document.querySelector("body")

menuHamburguer.addEventListener("click",()=>{
    body.classList.toggle("bodyOverflow")


    hideSite.forEach((el)=>{
        el.classList.toggle("hideAtiv")
    })

    menuOptions.classList.toggle("showMenu")
})