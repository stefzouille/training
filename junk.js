 const welcome = (f,g) => {
    let accord = g == "female" ? "e" : "";
    let msg = "Bonjour "+f+", vous êtes entré" + accord + " sur le chan";
    return msg;
}  
let firstname="bob";
let gender = "male" ; 
let msg = welcome(firstname,gender);
console.log(msg) ;