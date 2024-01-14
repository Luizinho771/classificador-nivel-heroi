

let heroName = "Paulo"
let heroXp   = 8213
let heroLevel


switch (true) {
    case (heroXp <= 1000):
        heroLevel = "Ferro"
        break;

    case (heroXp <= 2000):
        heroLevel = "Bronze"
        break;
    
    case (heroXp <= 5000):
    heroLevel = "Prata"
       break; 
        
    case (heroXp <= 7000):
       heroLevel = "Ouro"
       break;
    
    case (heroXp <= 8000):
        heroLevel = "Platina"
        break;
        
    case (heroXp <= 9000):
        heroLevel = "Ascendente"
        break;
    
    case (heroXp <= 10000):
        heroLevel = "Imortal"
        break;

    case (heroXp > 10000):
        heroLevel = "Imortal"
        break;

    default:
        console.log("level not found")
}

console.log("O Herói de nome " + heroName + " está no nível de " + heroLevel)