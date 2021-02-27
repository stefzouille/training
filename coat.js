// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou venteuse
let isRainy = true
let isWindy = false
let temp = 19

if (isRainy || isWindy) {
  console.log('Mettez votre manteau')
} else {
  console.log('Nous n avez pas besoin de manteau today')
}
if ( temp < 20) {
  console.log('ca caille mortelle fout ta cagoule')
} else {
  console.log('fout pas ta cagoule il fait trop chaud!')
}