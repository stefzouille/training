// Le programme précédent ne compte pas les E majuscules. Pouvez vous trouver un moyen pour que l'on compte le nombre de e total peu importe la casse.
//  Vous devrez utiliser la méthode .toUpperCase() ou .toLowerCase() pour cela.

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


let counte = 0

for ( i = 0; i < text.length; ++i) {                           // variable counte a 0 et i est tester a la longeur du texte
  if (text[i] === 'E') {
    counte++                                                   //si dans le texxte === E incremante counte de + 1
  }
}

console.log(`le nombre de e est de : ${counte}`)  