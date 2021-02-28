
//Même exercice que précédemment mais vous compterez toutes les voyelles.


let text = "Je suis le ténébreux, - le veuf, - l'inconsolé,\n\
Le prince d'Aquitaine à la tour abolie :\n\
Ma seule étoile est morte, - et mon luth constellé\n\
Porte le soleil noir de la Mélancolie.\n\
\n\
Dans la nuit du tombeau, toi qui m'as consolé,\n\
Rends-moi le Pausilippe et la mer d'Italie,\n\
La fleur qui plaisait tant à mon cœur désolé,\n\
Et la treille où le pampre à la rose s'allie.\n\
\n\
Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?\n\
Mon front est rouge encor du baiser de la reine ;\n\
J'ai rêvé dans la grotte où nage la sirène...\n\
\n\
Et j'ai deux fois vainqueur traversé l'Achéron ;\n\
Modulant tour à tour sur la lyre d'Orphée\n\
Les soupirs de la sainte et les cris de la fée.".toLocaleUpperCase()

let nbA = 0
let nbE = 0
let nbI = 0
let nbO = 0
let nbU = 0
let nbY = 0

for ( let i = 0; i < text.length; i++) 
  if (text[i] === 'A'){
  ++nbA
} else if (text[i] === 'E') {
  ++nbE
} else if (text[i] === 'I') {
  ++nbI
} else if (text[i] === 'O') {
  ++nbO
}else if (text[i] === 'U') {
  ++nbU
}else if (text[i] === 'Y') {
  ++nbY
}




console.log(`il y a ${nbA}`)
console.log(`il y a ${nbE}`)
console.log(`il y a ${nbI}`)
console.log(`il y a ${nbO}`)
console.log(`il y a ${nbU}`)
console.log(`il y a ${nbY}`)