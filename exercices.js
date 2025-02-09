const monnaie = `🪙`; ;
const nom_boutique = "Boutique de Boisson offrant des bienfaits";
const nom_sorcier = prompt("Quelle est ton nom, sorcier ? 🧙‍♂️ ");
var nbPotionSoin = 10;
var prixPotionSoin = 5;
var ouvertureBoutique = true;


if (ouvertureBoutique == true) {

    console.log("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔")
    
    var choix_sorcier = 0;
// J'avais fait un while qui tourne si different de 5 sauf que rien ne s'affichait dans la console 
// car cela réaffichait la solution que j'ai trouvé c'etait le ==0
// Je verrais pour regler ca plus tard

    while (choix_sorcier == 0){
        console.log("1. Le nom de la boutique")
        console.log("2. Le nom du Sorcier")
        console.log("3. Le prix d'un potion de soin")
        console.log("4. La quantité d'une potion de soin")
        console.log("5. Commander des potions");
        console.log("6. Quittez la boutique");
        
        choix_sorcier = prompt("Que veut tu faire, sorcier ? 🧙‍♂️");

    switch (parseInt(choix_sorcier)) {
        case 1:
        console.log(
            'Le nom de ma boutique est "' + nom_boutique + '" Cool non ?'
        );
        break;
        case 2:
        console.log(
            "Ton nom est " + nom_sorcier + " tu t'en rappelais vraiment pas ?"
        );
        break;
        case 3:
        console.log("Attends que je regarde.....");
        console.log("Le prix est de " + prixPotionSoin + " " + monnaie);
        break;
        case 4:
        console.log(
            "Je vais aller voir ça part comme des petits pain c'est truc la....."
        );
        console.log("Il m'en reste " + nbPotionSoin + " t'en veut ?");
        break;
        case 5:
        var nbVoulu = prompt("Tu en veut combien ?");
        var prixCommande = nbVoulu * prixPotionSoin;
        console.log(
            "Prix de " +nbVoulu+" potions de soins : "+ prixCommande+" " + monnaie+" mon cher Aventurier. 💸`."
        );
        break;
        case 6:
        console.log("A bientot, " + nom_sorcier);
        break;

        default:
        console.log(
            "Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕"
        );
        break;
    }}                     
    } else if (ouvertureBoutique == false) {
        console.log("La boutique " + nom_boutique + " est fermée, revenez plus tard Aventurier ! 😴`"
        );
    }