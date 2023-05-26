Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

1-creo un button nel DOM;
2-creo un contenitore nel DOM dove andare a inserire la griglia;
3-recupero il button in javascript;
4-recupero il contenitore nel file in javascript;
5-aggiungo una funzione con un evento che crei il gioco al click;
6-inserisco tutto il codice javascript dentro la funzione dell'evento;
7-creiamo il singolo quadratino;
8-appendiamo il quadrato nel DOM;

BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

1-inserisco la select nel DOM;
2-recupero la select e i suoi valori in javascript;
3-?se la difficoltà selezionata è facile inserisco la classe di square con misure /10;
4-:altrimenti ?se la difficoltà selezionata è normale inserisco la classe di square con misure /9;
5-:altrimenti inserisco la classe di square con misure /7;