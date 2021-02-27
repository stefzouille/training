// Ecrivez un programme qui affichera un message contenant tous les vêtements et accessoires 
// que vous devrez porter en fonction des données méteo. Ci dessus le début d'un template:


let isRainy = true
let temperature = 10
let clothes = ''

if (isRainy) {
  clothes += 'umbrella, ' // concatenation de string
}

if (temperature < 15) {
  clothes += 'coat, '
} else if (temperature >= 15 && temperature <= 20) {
  clothes += 'sweater, '
} else {
  clothes += 't-shirt, '
}
console.log(`Je vous recommande de porter: ${clothes}`)