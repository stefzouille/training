// Un carré magique est un tableau carré dont la somme de chaque rangées, colonnes et diagonales sont égales. Sur wikipedia vous pouvez obtenir une schéma d'un carré magique: https://fr.wikipedia.org/wiki/Carr%C3%A9_magique_(math%C3%A9matiques)
// Quelques schémas sont aussi disponible ici: https://mathworld.wolfram.com/images/eps-gif/MagicSquares_851.gif

// On peut représenter ce carré en javascript avec un tableau de tableaux:

// const square = [
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8],
// ]

// On remarque que la somme des éléments de toutes les lignes, colonnes et 2 diagonales sont égales à 15. Donc c'est un carré magique.

// Ecrivez une fonction isMagicSquare qui prendra comme paramètre un tableau de tableaux, comme notre exemple ci dessus, et qui retournera true si ce tableau correspond à un carré magique sinon false.

const isMagicSquare  = (square) => {
  let d1Sum = 0 
  for (let i = 0; i < square.length; ++i) {
    d1Sum += square[i][i]
  }
  let d2Sum = 0
  for (let i = 0; i < square.length; ++i) {
    d2Sum += square[i][square.length -1 -i]
  }
  if (d1Sum !== d2Sum) {
    return false
  }
  for (let i = 0; i < square.length; ++i) {
    let rowSum = 0
    for (let j = 0; j < square.length; ++j) {
      rowSum += square[i][j]
    }
    if (rowSum !== d1Sum) {
      return false
    }
  }

  for (let i = 0; i< square.length; ++i) {
    let colSum = 0
    for (let j = 0; j < square.length; ++j) {
      colSum += square[j][i]
    }
    if (colSum !== d1Sum) {
      return false
    }
  }
  return true
}
const square1 = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
]

// not a magic square
const square2 = [
  [2, 7, 6, 1],
  [9, 5, 1, 6],
  [4, 3, 8, 3],
  [1, 1, 1, 1],
]

// magic square
const square3 = [
  [17, 24, 1, 8, 15],
  [23, 5, 7, 14, 16],
  [4, 6, 13, 20, 22],
  [10, 12, 19, 21, 3],
  [11, 18, 25, 2, 9],
]

// not magic square
const square4 = [
  [11, 24, 1, 8, 15],
  [23, 5, 7, 14, 1],
  [4, 6, 6, 20, 22],
  [10, 12, 19, 21, 7],
  [11, 18, 25, 2, 9],
]
console.log(isMagicSquare(square1)) // output: true
console.log(isMagicSquare(square2)) // output: false
console.log(isMagicSquare(square3)) // output: true
console.log(isMagicSquare(square4)) // output: false