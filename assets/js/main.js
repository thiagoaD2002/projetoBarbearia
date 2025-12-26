const observador = new IntersectionObserver((chamadas)=>{
    chamadas.forEach((chamada)=>{
        if(chamada.isIntersecting){
            console.log(chamada.target)
            chamada.target.classList.add('show')
        } 
        else{
            chamada.target.classList.remove("show")
        }
    })

}, {})

const todosElementos = document.querySelectorAll(".todo")
todosElementos.forEach(el => observador.observe(el))