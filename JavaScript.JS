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

// console.log (
//     `
//     ${MTB1.peso} ${"è la bici più leggera"}
//     `
// );

const squadreCalcio = [
    squadra1 = {
        "nome": "juventus",
        "puntiJ": "0",
        "falliJ": "0",
    },
    squadra2 = {
        "nome": "Inter",
        "puntiI": "0",
        "falliI": "0",
    },
    squadra3 = {
        "nome": "Milan",
        "puntiM": "0",
        "falliM": "0",
    },

    puntiJ=Math.floor(Math.random() * 100) + 1,
    falliJ=Math.floor(Math.random() * 100) + 1,

    puntiI=Math.floor(Math.random() * 100) + 1,
    falliI=Math.floor(Math.random() * 100) + 1,

    puntiM=Math.floor(Math.random() * 100) + 1,
    falliM=Math.floor(Math.random() * 100) + 1,

]
console.log (
    `
    ${puntiJ} ${"punti fatti dalla Juventus"}
    ${falliJ} ${"falli subiti dalla Juventus"}


    ${puntiI} ${"punti fatti dall'Inter"}
    ${falliI} ${"falli subiti dall' Inter"}


    ${puntiM} ${"punti fatti dal Milan"}
    ${falliM} ${"falli subiti  dal Milan"}

    `
);





   