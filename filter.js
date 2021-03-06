// Ecrivez une fonction filter qui devra effectuer la même opération que la méthode .filter: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
// La fonction filter devra retourner un nouveau tableau dont tous les éléments passent le test implémenté 
// dans une fonction passé en paramètre à un tableau passé en paramètre aussi à la fonction filter.

// isEven = (number) => {
//   return number % 2 === 0 ? true : false
// }
// const filter = (funct, array) => {
//   const tab = []
//   for (const elem of array) {
//     if (funct(elem)) {
//        tab.push(elem) 
//     }
//   }
//   return tab
// } 
// numbers = [12, 1, 43, 8, 9, 22, 6, 19, 88, 76]

// console.log(filter(isEven, numbers))          //numbers du tableau des nombres

// isfilter = (nb) => {
//   return nb % 2 === 0? true : false
// }
// const filter = (fct, array) => {
//     const tab = []
//     for (const elem of array) {
//       if (fct(elem)) {
//         tab.push(elem)
//       }
//     }
//     return tab
// }
// numbers = [12, 1, 43, 3, 8, 9, 22, 6, 19, 88, 76]

// console.log(filter(isfilter, numbers))


//  isFilter = (nb) => {
//   return nb % 2 === 0
// }
// const filter = (fct, array) => {
//     const tab = []
//     for (const elem of array) {
//     if (fct(elem)) {
//       tab.push(elem)
//     }
//   }
//   return tab
// }
// numbers = [12, 25, 65, 75, 2, 8, 9, 74, 41]

// console.log(filter(isFilter, numbers))


// const isFilter = (nb) => {
//   return nb % 2 === 0
// }
// const filter = (fct, tab) => {
//   const array = []
//   for (const elem of tab) {
//     if (fct(elem)) {
//       array.push(elem)
//     }
//   }
//   return array
// }

// numbers = [12, 25, 78, 65, 74, 7, 5, 2, 1, 3]

// console.log(filter(isFilter, numbers))

// const isFilter = (nb) => {
//   return nb % 2 === 0
// }
// const filter = ( fct, tab) => {
//   array = []
//   for ( const elem of tab) {
//     if (fct(elem)) {
//       array.push(elem)
//     }
//   }
//   return array
// }
// numbers = [1, 21, 54, 78, 98, 6, 5, 4, 7, 2, 3, 45]

// console.log(filter(isFilter, numbers))


const isFilter = (nb) => {
  return nb % 2 === 0
}
const filter = (fct, tab) => {
  const array = []
    for (const elem of tab) {
      if (fct(elem)) {
        array.push(elem)
      }
    }
    return array
}
numbers = [2, 5, 8, 2,8, 9, 65, 7, 45, 12, 15, 4 ]

console.log(filter(isFilter, numbers))