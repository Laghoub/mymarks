// Données des utilisateurs
var users = [
    {
        "matricule": 1234,
        "mdp": 1230,
        "nom": "Laghoub",
        "prénom": "Nassim",
        "noteArabe": 17,
        "noteMath": 17,
        "noteFrançais": 15,
        "noteAnglais": 16
    }
];

// Variable globale pour stocker les informations de l'utilisateur
var user;

// Gérer la soumission du formulaire
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    // Récupère les valeurs de matricule et mot de passe
    var matricule = parseInt(document.getElementById('matricule').value);
    var mdp = parseInt(document.getElementById('mdp').value);

    // Vérifie si les informations de connexion sont valides
    user = users.find(user => user.matricule === matricule && user.mdp === mdp);
    if(user) {
        // Calcul de la moyenne générale
        var moyenneGenerale = (user.noteArabe + user.noteMath + user.noteFrançais + user.noteAnglais) / 4;

        // Affiche les informations de l'utilisateur
        document.getElementById('userName').innerText = user.nom + " " + user.prénom;
        document.getElementById('userNotes').innerHTML = `
            <tr>
                <th>Matière</th>
                <th>Note</th>
            </tr>
            <tr>
                <td>Arabe</td>
                <td>${user.noteArabe}</td>
            </tr>
            <tr>
                <td>Math</td>
                <td>${user.noteMath}</td>
            </tr>
            <tr>
                <td>Français</td>
                <td>${user.noteFrançais}</td>
            </tr>
            <tr>
                <td>Anglais</td>
                <td>${user.noteAnglais}</td>
            </tr>
            <tr>
                <td>Moyenne Générale</td>
                <td>${moyenneGenerale}</td>
            </tr>
        `;
        document.getElementById('userInfo').style.display = 'block';
        // Cache le formulaire de connexion
        document.getElementById('loginForm').style.display = 'none';

        // Afficher le bouton de téléchargement des notes
        document.getElementById('downloadButton').style.display = 'block';
        // Ajouter un écouteur d'événements pour le clic sur le bouton de téléchargement
        document.getElementById('downloadButton').addEventListener('click', downloadPDF);
    } else {
        alert('Matricule ou mot de passe incorrect');
    }
});

// Fonction pour télécharger les notes au format PDF
// Fonction pour télécharger les notes au format PDF
// Fonction pour télécharger les notes au format PDF
// Fonction pour télécharger les notes au format PDF
function downloadPDF() {
    // Création d'une nouvelle instance de jsPDF
    var doc = new jsPDF();

    // Ajouter le logo (120 px de largeur)
     // Ajouter le logo à la position (10, 10) avec une largeur de 120 px

    // Autres éléments du PDF
    doc.setFontSize(16);
    doc.text('République algérienne démocratique et populaire',55 , 20);
    doc.text('Association Soummam pour l\'enfance et la jeunesse', 55, 30);
    doc.setFontSize(22);
    doc.setFontStyle('bold');
    doc.text('Relevé de notes', 100, 45);
    doc.setFontSize(16);
    // Récupération des informations de l'utilisateur
    var userName = document.getElementById('userName').innerText;
    var userFiliere = "Filière: Scientifique"; // Vous pouvez remplacer par la vraie filière

    // Tableau des notes
    var userNotes = [
        ["Matière", "Note"],
        ["Arabe", user.noteArabe.toString()],
        ["Math", user.noteMath.toString()],
        ["Français", user.noteFrançais.toString()],
        ["Anglais", user.noteAnglais.toString()],
     
    ];

    // Ajouter le nom de l'utilisateur et sa filière
    doc.setFontStyle('normal');
    doc.text('Nom de l\'étudiant: ' + userName, 10, 75);
    doc.text(userFiliere, 10, 85);

    // Définir la position initiale du tableau
    var startX = 10;
    var startY = 120;

    // Dessiner les lignes du tableau
    for (var i = 0; i < userNotes.length; i++) {
        var row = userNotes[i];
        for (var j = 0; j < row.length; j++) {
            doc.text(row[j], startX + j * 50, startY + i * 10); // Ajouter chaque élément du tableau à la position appropriée
        }
    }

    // Ajouter une signature
    doc.text('Signature:', 160, 240);

    // Téléchargement du PDF avec le nom "notes_utilisateur.pdf"
    doc.save('relevé_de_notes_' + userName + '.pdf');
}

