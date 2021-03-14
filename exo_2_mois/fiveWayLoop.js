// Ecrire dans un même fichier ThreeWayLoop.js, 3 boucles différentes for, for-of, forEach qui effectueront le même traitement. Ce traitement consistera à afficher tous les éléments d'un tableau de string suivis de leur taille. Par exemple pour le tableau suivant const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve'] nous obtiendrons l'affichage suivant 3 fois (1 fois par loop):

// Alice, length: 5
// Bob, length: 3
// Charlie, length: 7
// Dan, length: 3
// Eve, length: 3

const tab = ['Alice', 'bob', 'Charlie', 'Dan', 'Eve']

//v1
for (let i = 0; i < tab.length; i++) {
  console.log(`${tab[i]}, length: ${tab[i].length}`)
}
//v2
for (const elem of tab) {
  console.log(`${elem}, length: ${elem.length}`)
}
//v3
tab.forEach((elem) => {
  console.log(`${elem}, length: ${elem.length}`)
})
//v4
let index = 0
while ( index < tab.length) {
  console.log(`${tab[index]}, length: ${tab[index].length}`)
  ++index
}
//v5
index = 0
do {
  console.log(`${tab[index]}, length: ${tab[index].length}`)
  ++index
} while (index < tab.length)