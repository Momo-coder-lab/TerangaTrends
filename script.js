// Exemple de code JavaScript pour afficher un message d'alerte lorsque la page se charge
window.onload = function() {
    alert("Bienvenue chez TerangaTrends ! Découvrez nos derniers gadgets électroniques.");
};

// Fonction pour gérer l'envoi du formulaire de contact
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêche l'envoi réel du formulaire
    alert("Merci de nous avoir contactés ! Nous vous répondrons sous peu.");
});

// Ajout d'une interaction au clic sur les boutons "Ajouter au panier"
let buttons = document.querySelectorAll('.product .btn');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        alert("Le produit a été ajouté au panier !");
    });
});
