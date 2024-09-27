var books = [];
var i = -1;

function ajouter(){
    var titre = document.getElementById('titre').value;
    var auteur = document.getElementById('auteur').value;
    var prix = document.getElementById('prix').value;

    if (i ==-1) {
        books.push({ titre, auteur, prix });
    } else {
        books[i] = { titre, auteur, prix };
        i = -1;
    }

    resetForm();
    mettreAJourTableau();
}

function ajouterLivreTable(titre, auteur, prix, index){
    const table = document.querySelector('#livresTable tbody');
    const nouvelleLigne = document.createElement('tr');

    nouvelleLigne.appendChild(creerCellule(titre));
    nouvelleLigne.appendChild(creerCellule(auteur));
    nouvelleLigne.appendChild(creerCellule(prix));

    const celluleActions = document.createElement('td');
    
    const btnEditer = document.createElement('button');
    btnEditer.textContent = 'Éditer';
    btnEditer.addEventListener('click', function() {
        editerLivre(index);
    });
    celluleActions.appendChild(btnEditer);

    const btnSupprimer = document.createElement('button');
    btnSupprimer.textContent = 'Supprimer';
    btnSupprimer.addEventListener('click', function() {
        supprimerlivre(index);
    });
    celluleActions.appendChild(btnSupprimer);

    nouvelleLigne.appendChild(celluleActions);
    table.appendChild(nouvelleLigne);
}

function creerCellule(contenu) {
    const cellule = document.createElement('td');
    cellule.textContent = contenu;
    return cellule;
}

function mettreAJourTableau() {
    const tableBody = document.querySelector('#livresTable tbody');
    tableBody.innerHTML = '';  
    books.forEach((book, i) => {
        ajouterLivreTable(book.titre, book.auteur, book.prix, i);
    });
}

function supprimerLivre(i) {
    books.splice(i, 1);
    mettreAJourTableau();
}

function editerLivre(i) {
    document.getElementById('titre').value = books[i].titre;
    document.getElementById('auteur').value = books[i].auteur;
    document.getElementById('prix').value = books[i].prix;
    document.getElementById('ajouterButton').textContent = 'editer Livre';
    i= index;
}

function resetForm() {
    document.getElementById('titre').value = '';
    document.getElementById('auteur').value = '';
    document.getElementById('prix').value = '';
    document.getElementById('ajouterButton').textContent = 'Ajouter Livre';
}
