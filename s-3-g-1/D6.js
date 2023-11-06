/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
let stringa1= "ciaone"
let stringa2= "come va?"
function concatenamento(stringa1, stringa2){
  let caratteri= stringa1.substring(0,2)
  let caratteri2= stringa2.slice(-3)
  let unione= caratteri + caratteri2
  let maiuscolo= unione.toUpperCase()
  console.log(maiuscolo)
}
concatenamento(stringa1, stringa2)
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
const risultato2= numeriACaso()
function numeriACaso(){
  let arrayVuoto = []
  for(let i2 = 0; i2 < 10; i2++){
  let randomico= Math.floor(Math.random() * 101)
  arrayVuoto.push(randomico)
  }
  return arrayVuoto
}
console.log(risultato2)
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
let numeri= [1,2,3,4,5,6,7]
let risultato3= creaNumPari(numeri)
function creaNumPari(numeri){
let numeriPari= numeri.filter(numero => numero % 2 === 0)
return numeriPari
}
console.log(risultato3)
/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
let numeriEs4= [10,20,30,40,50]
let risultato4= sommaINumeri(numeriEs4)

function sommaINumeri(numeriEs4){
  let somma = 0

  numeriEs4.forEach(numero => {
    if (typeof numero === 'number'){
      somma += numero
    }
  })
      return somma
  }
console.log(risultato4)
/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
let numeriEs5= [10,20,30,40,50]
let risultato5= sommaINumeri2(numeriEs5)

function sommaINumeri2(numeriEs5){

  let somma= numeriEs5.reduce((accumulatore, numero) => {
    if(typeof numero === 'number') {
      return accumulatore + numero
    }
    return accumulatore
  }, 0)
  return somma
}
console.log(risultato5)
/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
let numeriEs6 = [1, 2, 3, 4, 5];
let n= 10
let risultato6 = incrementatore(numeriEs6, n)
function incrementatore(numeriEs6, n){
  let nuovoArray= numeriEs6.map(numero => numero + n)
  return nuovoArray
}
console.log(risultato6)
/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const stringa = ["EPICODE", "is", "great"]
let risultato7 = mappo(stringa)
function mappo(stringa){
  const epicode = stringa.map(testo => testo.length);
  return epicode;
}
console.log(risultato7)
/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
let risultato8 = mettiDispari()
function mettiDispari() {
  const arrayVuoto8 = [];
  for (let i8 = 1; i8 <= 99; i8 += 2) {
    arrayVuoto8.push(i8);
  }
  return arrayVuoto8;
}
console.log(risultato8)
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
let risultato9 = trovafilmVecchio(movies)
function trovafilmVecchio(arrayDiFilm) {
  let filmPiuVecchio = null
  let annoMinimo = Infinity

  arrayDiFilm.forEach(film => {
    const anno = parseInt(film.Year)
    if (!isNaN(anno) && anno < annoMinimo) {
      annoMinimo = anno
      filmPiuVecchio = film
    }
  });

  return filmPiuVecchio;
}
console.log(risultato9);
/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
let risultato10 = numeroDiFilm(movies)
function numeroDiFilm(arrayDiFilm) {
  return arrayDiFilm.length;
}
console.log(risultato10);
/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
let risultato11 = estraiTitoli(movies)
function estraiTitoli(arrayDiFilm) {
  const titoli = arrayDiFilm.map(film => film.Title)
  return titoli
}
console.log(risultato11)
/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
let risultato12 = filmDelMillennioCorrente(movies)

function filmDelMillennioCorrente(arrayDiFilm) {
  let annoCorrente = new Date().getFullYear()
  let filmMillennioCorrente = arrayDiFilm.filter(film => {
    let annoUscita = parseInt(film.Year)
    return !isNaN(annoUscita) && annoUscita >= annoCorrente - 10 && annoUscita <= annoCorrente
  });
  return filmMillennioCorrente
}
console.log(risultato12)
/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
let risultato13 = sommaAnni(movies)
function sommaAnni(arrayDiFilm) {
  let somma = arrayDiFilm.reduce((accumulatore, film) => {
    let anno = parseInt(film.Year)
    if (!isNaN(anno)) {
      return accumulatore + anno
    } else {
      return accumulatore
    }
  }, 0);
  return somma
}
console.log(risultato13)
/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
let imdbIDDaCercare = 'tt0120737'
function trovaCodice(arrayDiFilm, imdbIDDaCercare) {
  let filmDaTrovare = arrayDiFilm.find(film => film.imdbID === imdbIDDaCercare)
  return filmDaTrovare
}
const risultato14 = trovaCodice(movies, imdbIDDaCercare)

if (risultato14) {
  console.log(risultato14)
} else {
  console.log('Film non trovato.')
}
/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
let anno = '2001'; 
let indice= trovatore(movies, anno)
function trovatore(arrayDiFilm, anno) {
  const indice = arrayDiFilm.findIndex(film => film.Year === anno)
  return indice
}
if (indice !== -1) {
  console.log(`Il primo film uscito nell'anno ${anno} si trova all'indice ${indice}.`)
} else {
  console.log(`Nessun film trovato per l'anno ${anno}.`)
}