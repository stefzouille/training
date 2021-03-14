//Vérifier si dans le texte suivant le mot Javascript est présent:

let text = "JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript"

let msg = 'Javascript'                                                    // definir une variable Javascript

if (text.includes(msg)){                                                  //si dans le texte est inclu la variable defini msg
  console.log(`il y a le mot ${msg} est dans le texte`)                   // affiche la variable un fois passé dans la boucle
  }  else {                                                               //sinon affiche qu elle n y est pas 
    console.log(`le mot ${msg} n est pas pas dans le text`)
}   

  
  
