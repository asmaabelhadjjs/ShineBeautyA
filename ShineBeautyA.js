// Page d'acceuil
document.addEventListener("DOMContentLoaded", () => {
    const siteNameElement = document.getElementById("site-name");
    const text = siteNameElement.textContent; // Récupère le texte "ShineBeauty"
    siteNameElement.textContent = ""; // Vide le contenu initial
    let index = 0;
    const repeatDelay = 1000; // Délai avant de recommencer (en millisecondes)

    function typeLetterByLetter() {
        if (index < text.length) {
            siteNameElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeLetterByLetter, 150); // Définit la vitesse d'affichage (150 ms par lettre)
        } else {
            // Réinitialise et recommence après un délai
            setTimeout(() => {
                siteNameElement.textContent = "";
                index = 0;
                typeLetterByLetter();
            }, repeatDelay);
        }
    }

    typeLetterByLetter();
});

// Défilement fluide vers la section Contact
document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.querySelector('a[href="#Contact"]');
    contactLink.addEventListener('click', function(event) {
        event.preventDefault();  // Empêche le comportement par défaut du lien
        const contactSection = document.getElementById('Contact');
        window.scrollTo({
            top: contactSection.offsetTop,
            behavior: 'smooth'  // Défilement fluide
        });
    });
});
// Défilement fluide vers le formulaire de commande (section "Passer votre commande")
const cartIcon = document.querySelector('.cart-icon');
cartIcon.addEventListener('click', function(event) {
    event.preventDefault();  // Empêche le comportement par défaut du lien
    const orderFormSection = document.getElementById('orderFormSection');
    window.scrollTo({
        top: orderFormSection.offsetTop,
        behavior: 'smooth'  // Défilement fluide
    });
});
//  Défilement fluide vers la section Produits
        const produitsLink = document.querySelector('a[href="#Produits"]');
        produitsLink.addEventListener('click', function(event) {
            event.preventDefault();  // Empêche le comportement par défaut du lien
            const productsSection = document.getElementById('productsSection');
            window.scrollTo({
                top: productsSection.offsetTop,
                behavior: 'smooth'  // Défilement fluide
            });
        });

// Sélectionne les liens avec des ancres (#)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut
        const targetId = this.getAttribute('href').substring(1); // Récupère l'id cible
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Défilement fluide
                block: 'start'
            });
        }
    });
});

// Sélection de tous les boutons de commande
const orderButtons = document.querySelectorAll('.order-button');
// Déclaration des variables pour stocker les informations sur les produits
let totalQuantity = 0;
const unitPrice = 50; // Prix unitaire de chaque produit (50€)

// Ajout d'un événement 'click' à chaque bouton
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Incrémente la quantité à chaque commande
        totalQuantity++; // Chaque fois que l'utilisateur clique, la quantité augmente de 1
        const quantityInput = document.getElementById("quantity");
        quantityInput.value = totalQuantity; // Met à jour la quantité dans le champ

        // Met à jour le prix total en fonction de la quantité
        const totalPriceInput = document.getElementById("totalPrice");
        totalPriceInput.value = (totalQuantity * unitPrice).toFixed(2); // Calcule le prix total
    });
});

// Partie formulaire
document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("orderForm");
    const quantityInput = document.getElementById("quantity");
    const totalPriceInput = document.getElementById("totalPrice");
    const productSelect = document.getElementById("productSelect"); // Sélection produit
    const ordersTbody = document.getElementById('orders-tbody'); // Tableau des commandes

    // Fonction pour mettre à jour le prix total
    function updateTotalPrice() {
        const quantity = parseInt(quantityInput.value); // Récupère la quantité
        const totalPrice = unitPrice * quantity; // Calcule le prix total
        totalPriceInput.value = totalPrice.toFixed(2); // Met à jour le champ du prix total
    }

    // Met à jour le prix dès le début si une quantité est déjà définie
    updateTotalPrice();

    // Écoute l'événement de changement de quantité dans le formulaire
    quantityInput.addEventListener('input', updateTotalPrice);

    // Gestion du formulaire
    orderForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Empêche l'envoi du formulaire

        // Récupère les informations du formulaire
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const product = productSelect.value; // Récupère le produit sélectionné
        const quantity = parseInt(quantityInput.value);
        const totalPrice = parseFloat(totalPriceInput.value);

        // Crée une nouvelle ligne pour le tableau des commandes
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>#</td> <!-- ID de la commande (non dynamique ici) -->
            <td>${lastName}</td>
            <td>${firstName}</td>
            <td>${product}</td>
            <td>${quantity}</td>
            <td>${totalPrice.toFixed(2)}€</td>
            <td>${new Date().toLocaleDateString()}</td>
        `;

        // Ajoute la nouvelle ligne au tableau
        ordersTbody.appendChild(row);

        // Affiche un message de confirmation
        alert("Commande finalisée. Merci pour votre achat !");

        // Réinitialise le formulaire
        orderForm.reset();
        totalQuantity = 0; // Réinitialise la quantité
        quantityInput.dispatchEvent(new Event("input")); // Réinitialise le prix total
    });
});