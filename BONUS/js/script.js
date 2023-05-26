//variabile griglia
const grid = document.getElementById('grid');

//variabile bottone
let button = document.getElementById('btn');

//variabile select
let select = document.getElementById('difficulty');

//funzione click bottone
button.addEventListener('click',function(){
    
    grid.innerHTML='';

    //variabile valore select
    let difficulty = select.value;

    //funzione quadrati
    function create_square(){
        
        //creazione quadrati
        let square = document.createElement('div');

        //classe del quadrato
        square.classList.add('square');
        
        return square;
    };

    //ciclo per i quadrati
    if(difficulty === '1'){
        for(let i=1; i<=100; i++){
            
            //variabile della funzione
            let square = create_square();

            //classa dimensione quadrati
            square.classList.add('square1');
            
            //stampa numeri quadrati
            square.innerText = i;
    
            //funzione click per colorare quadrato selezionato
            square.addEventListener('click', function(){
                this.classList.toggle('clicked');
                console.log(i);
            });
    
            //inserimento quadrati nell'HTML
            grid.append(square);
        };
    }
    
    else if(difficulty === '2'){
        for(let i=1; i<=81; i++){
        
            let square = create_square();

            //classa dimensione quadrati
            square.classList.add('square2');
            
            //stampa numeri quadrati
            square.innerText = i;
    
            //funzione click per colorare quadrato selezionato
            square.addEventListener('click', function(){
                this.classList.toggle('clicked');
                console.log(i);
            })
    
            //inserimento quadrati nell'HTML
            grid.append(square);
        };
    }

    else{
        for(let i=1; i<=49; i++){
            
            //variabile della funzione
            let square = create_square();

            //classa dimensione quadrati
            square.classList.add('square3');
            
            //stampa numeri quadrati
            square.innerText = i;
    
            //funzione click per colorare quadrato selezionato
            square.addEventListener('click', function(){
                this.classList.toggle('clicked');
                console.log(i);
            });
    
            //inserimento quadrati nell'HTML
            grid.append(square);
        };
    }
});
