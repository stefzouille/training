// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou venteuse
let isRainy = true
let isWindy = false
let temp = 19

if (isRainy || isWindy) {                                            //si il pleut OU il vente
  console.log('Mettez votre manteau')                                
} else {                                                            //sinon 
  console.log('Nous n avez pas besoin de manteau today')
}
if ( temp < 20) {                                                   //si la temp plus petite que 20degré
  console.log('ca caille mortelle fout ta cagoule')
} else {                                                            //sinon supp a 20degré
  console.log('fout pas ta cagoule il fait trop chaud!')
}