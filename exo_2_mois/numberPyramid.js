// Ecrire une fonction numberPyramid qui prend 1 paramètre qui correspondra à la base de la pyramide. 
// Cette fonction affichera une pyramide dont les motifs pour chaque étage correspondra au numéro de la ligne.

// numberPyramid(8)

const numberPyramid = (nb) => {
  for ( let i = 1; i <= nb; ++i) {
    console.log(`${i}`.repeat(i))
  }
}

numberPyramid(5)
numberPyramid(8)