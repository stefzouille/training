// Lisez cet exercice entièrement avant de commencer.
// Ecrire une fonction information qui prend 3 paramètres:

// un prénom qui sera une string
// un nom qui sera une string
// un âge qui sera un number
// Cette fonction devra afficher le message suivant en fonction des paramètres:

//information('Sofiane', 'Akermoun', 39)

const information = (first, name, age) => {
  console.log(`prenom: ${first}`)
  console.log(`nom: ${name}`)
  console.log(`age: ${age}`)
  if (age >= 18) {
    console.log(`Vous etes majeur depuis ${age - 18} ans`)
  } else {
    console.log(`vous serez majeur dans ${18 - age} ans`)
  }
}

information('Sofiane', 'Akermoon', '39')
information('Alice', 'Liddell', '7')