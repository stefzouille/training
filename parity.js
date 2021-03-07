// Ecrire une fonction isOdd qui prend un nombre en paramètre et qui devra retourner true si le nombre passé en paramètre est impair, 
// sinon la fonction retournera false.

// const isOdd = (nb) => {
//   return nb % 2 !== 0 ? true : false
// }

// const isOdd = (nb) => {
//   return nb % 2 !== 0 ? true : false
// }
// const isOdd = (nb) => {
//   return nb % 2 !== 0
// }

// const isOdd = (nb) => {
//   return nb % 2 !== 0 ? true : false
// }
// const isEven = (nb) => {
//   return isOdd(nb) !== 0
// }

const isOdd = (nb) => {
  return nb % 2 !== 0
}
const isEven = (nb) => {
  return isOdd(nb) !== 0
}
console.log(isEven(32))