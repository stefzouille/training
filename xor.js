// En vous basant sur vos explications de l'exercice précédent, ou d'internet, 
// écrivez un programme qui simule une opération xor.
// indice: xor peut être obtenu avec une combinaison d'opérateurs logiques &&, || et !. 
// La réponse peut être obtenue sur internet, essayez de comprendre!!!


// // &&: logical AND operator
// false && false // false
// false && true // false
// true && false // false
// true && true // true

// // ||: logical OR operator
// false || false // false
// false || true // true
// true || false // true
// true || true // true

let a = true
let b = true


console.log(!a && b)


let c = true
let d = true

console.log((!c || !d) && (c || d))