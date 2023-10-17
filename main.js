//alert('coucou')

const landing = document.querySelector('.landing')

let backgrounds = ["bgCocotte", "bgBocaux", "bgPoeleFonte"]

setInterval(  change , 1000 )

let index = 0
function change(){

    landing.classList.remove(backgrounds[index])

    index++

    if(index >= backgrounds.length){ index = 0 }

    landing.classList.add(backgrounds[index])

}

const burger = document.querySelector('.burger')
const boutonMenu = document.querySelector('.boutonMenu')
const menu = document.querySelector('.menu')


burger.addEventListener('click',()=>{
    menu.classList.add('ouvert')
})
boutonMenu.addEventListener('click',()=>{
    menu.classList.remove('ouvert')
})



// faire en sorte que le background alterne parmis les trois disponibles
// toutes les 3 secondes