// Ecrire une fonction guess qui prend 2 nombres en paramètres userGuess et secret.
// Si userGuess est inférieur à secret la fonction devra afficher: Too small!
// Si userGuess est supérieur à secret la fonction devra afficher: Too big!
// Si userGuess est égal à secret la fonction devra afficher: You win

const guess = (userGuess, secret) => {
  if (userGuess < secret){
    return 'too small'
  }
  else if (userGuess > secret) {
    return 'too big'
  }
  else 
  return 'You win'
}
console.log(guess(2, 2))