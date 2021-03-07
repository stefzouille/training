// Ecrire une fonction forEach qui devra effectuer la même opération que la méthode 
// .forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 
// La fonction forEach devra appliquer une fonction passée en paramètre à chacun des éléments d'un tableau
//  passé en paramètre aussi à la fonction forEach

// const forEach = (tab, fn) => {           // Création fonction avec 2 parametre 
//   for (const elem of tab) {
//     fn(elem)                             // Appeler la fonction ELEM !! 
//   }
// }
// let result = [1, 2, 8, 4, 5]
// result.forEach(elem => console.log(elem))  


// const forEach = (tab, fct) => {
//   for ( const elem of tab) {
//     fct(elem)
//   }
// }
// const numbers = [5, 64, 87, 74, 75, 23, 1, 345]
// numbers.forEach(elem=> console.log(elem))

// const forEach = (fct, tab) => {
//   for(const elem of tab) {
//     fct(elem)
//   }
// }

// const nb = [5, 7, 8, 9, 6, 3, 2, 1, 12]
// nb.forEach(elem => console.log(elem))

// const forEach = (fct,tab) => {
//   for(const elem of tab) {
//     fct(elem)
//   }
// }
// nb = [5, 8, 87, 54, 21, 2]
// nb.forEach(elem => console.log(elem))

// const forEach = (tab, fct) => {
//   for(const elem of tab) {
//      fct(elem)
//   }
// }
// nb = [6, 8, 74, 51, 21, 23, 1]
// nb.forEach(elem => console.log(elem))

const forEach = (tab, fct) => {
  for(const elem of tab) {
    fct(elem)
  }
}
nb = [5, 6, 78, 54, 564, 64, 64, 64]
nb.forEach(elem => console.log(elem))
