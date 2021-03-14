// Ecrire une fonction podium qui prend comme paramètre un tableau de number et affiche les 3 meilleures notes tel que ci dessous:

// 1st: 20
// 2nd: 18
// 3rd: 14

const podium = (tab) => {
  let top3 = tab
  .sort((a, b) => {
    return b - a
  })
  .slice(0, 3)
  console.log(`1st: ${top3[0]}`)
  console.log(`2st: ${top3[1]}`)
  console.log(`3st: ${top3[2]}`)
}

let scores = [1, 10, 56, 9, 45, 0, 11, 4]
podium (scores)
