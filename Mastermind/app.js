const colors = ["rgb(186, 255, 72)", "rgb(72, 186, 255)", "rgb(255, 72, 72)", "rgb(252, 255, 0)", "rgb(255, 186, 72)"];

// on accède à un élément d'un array en faisant : 
// Je veux accéder à "vert" je fais: colors[0]
const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
// on récupère la div line1
const line1 = document.querySelector("#line1");

for(let i = 0 ; i < line1.children.length; i++){
    let randomNumber = getRandomNumber(0, 4); // on déclare un nombre aléatoire
    let randomColor = colors[randomNumber] // grace a ce nombre on récupère une couleur aléatoire dans le tableau color
    line1.children[i].style.backgroundColor = randomColor; // on modifie le background Color de la div avec cette couleur aléatoire
}