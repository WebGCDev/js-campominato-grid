# GRIGLIA CAMPO MINATO

```
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

```

---

Procedimento per lo svolgimento:

- Dovrò generare dei blocchi e per questo creo il suo markup per controllare gli effetti che avrò su di loro.

- Dentro il mio contenitore andranno inserite delle caselle che genererò con un loop

- Tramite una funzione che contenga il reset pulisco il mio contenitore

- Penso di creare un’altra funzione che mi permetta di generare i miei quadrati (come consegna sarà un 10x10, se riuscirò a fare i bonus creo un 9x9 e un 7x7)

- Con un metodo che mi permetta di accedere alle informazioni memorizzate nel nostro quadrato, quando avrò cliccato faccio il log del suo id e grazie al css cambierò il suo colore.
