//variabile griglia
const grid = document.getElementById('grid')

//variabile bottone
let button = document.getElementById('btn')

//funzione click bottone
button.addEventListener('click',function(){
    
    //funzione quadrati
    function create_square(){
        
        //creazione quadrati
        let square = document.createElement('div')

        //classe del quadrato
        square.classList.add('square')
        
        return square
    }

    //ciclo per i quadrati
    for(let i=1; i<=100; i++){
        
        let square = create_square()
        
        //stampa numeri quadrati
        square.innerText = i

        //funzione click per colorare quadrato selezionato
        square.addEventListener('click', function(){
            this.classList.toggle('clicked')
            console.log(i)
        })

        //inserimento quadrati nell'HTML
        grid.append(square)
    }
    
    //variabile classe display none
    let none = document.getElementsByClassName('none')
    
    //funzione per far scomparire il bottone
    button.classList.toggle('none')
})
