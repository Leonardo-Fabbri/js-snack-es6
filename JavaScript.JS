// const bici = [
//     MTB1= {
//        "nome": "Atlas",
//        "peso": "6.8kg",
//     },
//     MTB2= {
//         "nome": "Carrera",
//         "peso": "9kg",

//     },
//     MTB3 = {
//         "nome": "Carrera",
//         "peso": "7.5kg",

//     }
// ]
// let biciLight=bici[0]

// for (let i=0; i< bici.length;i++) {
//     if (bici[i].peso < biciLight.peso){
//         peso[i]= bici[i].peso;
//     }
// }
// console.log ( ` la bici più leggera è ${biciLight.nome}, che pesa ${biciLight.peso} `);



// console.log (
//     `
//     ${biciLight.peso} ${"è la bici più leggera"}
//     `
// );

// const squadreCalcio = [
//     squadra1 = {
//         "nome": "juventus",
//         "puntiJ": "0",
//         "falliJ": "0",
//     },
//     squadra2 = {
//         "nome": "Inter",
//         "puntiI": "0",
//         "falliI": "0",
//     },
//     squadra3 = {
//         "nome": "Milan",
//         "puntiM": "0",
//         "falliM": "0",
//     },

//     puntiJ=Math.floor(Math.random() * 100) + 1,
//     falliJ=Math.floor(Math.random() * 100) + 1,

//     puntiI=Math.floor(Math.random() * 100) + 1,
//     falliI=Math.floor(Math.random() * 100) + 1,

//     puntiM=Math.floor(Math.random() * 100) + 1,
//     falliM=Math.floor(Math.random() * 100) + 1,
//     //si poteva fare una funzione per risparmiare righe di codice..//

// ]
// console.log (
//     `
//     ${puntiJ} ${"punti fatti dalla Juventus"}
//     ${falliJ} ${"falli subiti dalla Juventus"}


//     ${puntiI} ${"punti fatti dall'Inter"}
//     ${falliI} ${"falli subiti dall' Inter"}


//     ${puntiM} ${"punti fatti dal Milan"}
//     ${falliM} ${"falli subiti  dal Milan"}
//     `
// );






// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter

let array = ["1","2","3","4","5","6"];

function myFunction (arr, p, g){
    return arr.filter((element, index) => {
        return index>= p && index <=g;
    })
}

console.log(myFunction(array, 1, 6));





































   