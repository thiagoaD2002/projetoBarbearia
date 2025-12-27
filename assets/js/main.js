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
menuHamburguer.addEventListener("click",()=>{
    const menuOptions = document.querySelector(".menuOptions")
    const hideSite = document.querySelectorAll(".hide")
    const body = document.querySelector("body")
    body.classList.toggle("bodyOverflow")
    

    hideSite.forEach((el)=>{
        el.classList.toggle("hideAtiv")
    })

    menuOptions.classList.toggle("showMenu")
    
    
    const alHide = document.querySelectorAll(".hide")
})