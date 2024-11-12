let bouton = document.getElementById('monBouton'); // sélection
let champDeTexte = document.getElementById('monChamp');

bouton.addEventListener("click", function() {
    let texte = champDeTexte.value; // récupération du texte dans le champ
    if (texte) {
      // console.log(texte); // affiche le texte dans la console
        document.getElementById('resultat').innerText = texte; // affiche le texte dans le paragraphe
    } else {
        alert("Veuillez entrer du texte !"); // alerte si rien n'a été entré
    }
});