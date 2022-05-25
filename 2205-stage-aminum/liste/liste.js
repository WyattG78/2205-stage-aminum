console.log('bonsoir');

//déclarations d'un boolean
//let nomDeVariable = uneValeur;
let jour = true;
console.log("jour : "+jour);

let age = 16;
console.log("mon age : "+age);

// const prenom = "Wyatt";
let prenom = "Wyatt";
console.log("mon prenom : "+prenom);

let marques = ["Nike","FootKorner","Versacce"];
console.log("les marques de Wyatt : "+marques);

age = 5;
prenom = "Tchoupie";
console.log("mon prenom : "+prenom);

let joueurs = ["Ronaldo","Benzema","Mahrez","Modric","Rashford"];
console.log("les meilleurs joueurs : "+joueurs);

// const club = "Manchester City"
let club = "Manchester City";
console.log("le meilleur club : "+club);

club = "Real Madrid";
console.log("le meilleur club : "+club);

const nombredeliguedeschampions = 14;
for (let i = 0; i < nombredeliguedeschampions; i++) {
   if (i >= 8){
      console.log("Ligue des Champions pour le Real Madrid ",i+1);
   }  
}
// for (let i = 0; i < joueurs.length; i++) {
//    console.log(joueurs[i]);
// }
// for (let i = 0; i < marques.length; i++) {
//    console.log(marques[i]);
// }
let joueurs2 = ["Ronaldo7","Benzema9","Mahrez26","Modric17","Rashford10"];

function affichetableau(tab){
   for (let i = 0; i < tab.length; i++) {
      console.log(tab[i]);
   }
}

affichetableau(joueurs);
affichetableau(marques);
affichetableau(joueurs2);
// affichetableau(null);