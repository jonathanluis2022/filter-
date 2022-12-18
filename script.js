const filter = document.querySelector(' header input '); //pegar o input dentro de header
const cards = document.querySelectorAll('.cards li'); // pegar todos os li

filter.addEventListener('input', filtercards)

function filtercards() {

    if (filter.value !== ' ') { // si filter for vazio quero todos os cards 

        for (let card of cards) {

            let title = card.querySelector('h2'); //pegar os h2

            title = title.textContent.toLowerCase() //deixa todas as letras minusculas

            let filterText = filter.value.toLowerCase(); //vaor que nos escrever no input deixa-lo minusculo

            if (!title.includes(filterText)) {

                card.style.display = 'none'
                /* si o titulo do h2 nao conter nenhum elemento do filterText
                desaparece da tela (none)*/

            } else {

                card.style.display = 'block'
                /* mas si tiver vai aparecer em bloco */
            }
        }

    } else {

        for (let card of cards) {

            card.style.display = 'block'
            /* vai iterar e vai aparecer em bloco todos que tiver o mesmo elemento 
            que digitarmos no input */
        }
    }
} 