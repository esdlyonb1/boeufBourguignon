//alert('coucou')

const landing = document.querySelector('.landing')

let backgrounds = ["bgCocotte", "bgBocaux", "bgPoeleFonte"]

setInterval(  change , 1000 )

let index = 0
function change(){


    landing.classList.remove(backgrounds[index])

    index++

    landing.classList.add(backgrounds[index])


}




// faire en sorte que le background alterne parmis les trois disponibles
// toutes les 3 secondes