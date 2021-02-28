//Ecrivez un programme qui affiche ligne par ligne, l'index et le caractère situé à cet index de la phrase suivante:

let text = 'était à Mégara, faubourg de Carthage, dans les jardins d\'Hamilcar.'

for ( i = 0; i < text.length; i++){                             //i a 0 et plus petit que la longueur du texte et incremente de + 1 

  console.log(`le caractere: ${text[i]} a l index ${[i]}`)      // l index du text  et variable i declarer dans la boucle
}
