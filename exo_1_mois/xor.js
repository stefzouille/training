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

let a = true                                //declare la variable 
let b = true                                //declare la variable 


console.log(!a && b)                       // contraire de a est false ET b est true  = false


let c = true
let d = true

console.log((!c || !d) && (c || d))        // contraire de c false ou idem d false ET c true ou d true = false