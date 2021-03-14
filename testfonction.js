//Voici 3 fonctions identiques. La syntaxe est différente :

function hello(a) {
    return a+2;
}
const hello = (a) => {
    return a+2
}
const hello = a => a+2; 

//Pour la dernière on n'es pas obligé de mettre les parenthèses si on as un seul paramètre (ici a). 
//Si on as un seul traitement (ici a+2) dans ta fonction alors on peux retirer les accolades et le return !

//Si plusieurs paramètres  (a,b,..) :
const hello = (a,b)=>a+b*3;


//Si plusieurs traitement dans la fonction = { + return }
const hello = (a,b) => {
   let c = 0
   if(a>10) c=5; else c=6;
   return a+b*c;
}