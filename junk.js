 const welcome = (f,g) => {
    let accord = g == "female" ? "e" : "";
    let msg = "Bonjour "+f+", vous êtes entré" + accord + " sur le chan";
    return msg;
}  
let firstname="alice";
let gender = "female" ; 
let msg = welcome(firstname,gender);
console.log(msg) ;