
function ouvrirBoitesDialogue(caseTableau) {
    var contenu1 = prompt("Donner la matiere :");
    var contenu2 = prompt("Donner l'enseignant :");
    caseTableau.innerHTML += "<br>" + contenu1 + "<br>" + contenu2;
}
  