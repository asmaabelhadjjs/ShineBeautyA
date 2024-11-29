// Sélection de tous les boutons de commande
const orderButtons = document.querySelectorAll('.order-button');
// Ajout d'un événement 'click' à chaque bouton
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Commande passée avec succès !');
    });
});




// Partie formulaire 
document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity");
    const totalPriceInput = document.getElementById("totalPrice");
    const unitPrice = 50; // Prix unitaire

    // Mettre à jour le prix total en fonction de la quantité
    quantityInput.addEventListener("input", () => {
        const quantity = parseInt(quantityInput.value) || 0;
        totalPriceInput.value = (quantity * unitPrice).toFixed(2);
    });

    // Calcul initial
    quantityInput.dispatchEvent(new Event("input"));

    // Gestion du formulaire
    const orderForm = document.getElementById("orderForm");
    orderForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Commande finalisée. Merci pour votre achat !");
        orderForm.reset();
        quantityInput.dispatchEvent(new Event("input")); // Réinitialiser le prix total
    });
});

// partie du tableau des commandes passées 
// Données fictives pour les commandes passées
const orders = [
    {
        id: 1,
        nom: 'Dupont',
        prenom: 'Marie',
        produit: 'Crème Anti-âge',
        quantite: 2,
        prixTotal: '50€',
        date: '2024-11-25'
    },
    {
        id: 2,
        nom: 'Durand',
        prenom: 'Sophie',
        produit: 'Rouge à lèvres mat',
        quantite: 1,
        prixTotal: '20€',
        date: '2024-11-26'
    },
    {
        id: 3,
        nom: 'Martin',
        prenom: 'Élodie',
        produit: 'Mascara Volume',
        quantite: 3,
        prixTotal: '45€',
        date: '2024-11-27'
    }
];

// Ajouter les lignes des commandes au tableau
const tbody = document.getElementById('orders-tbody');

orders.forEach(order => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.nom}</td>
        <td>${order.prenom}</td>
        <td>${order.produit}</td>
        <td>${order.quantite}</td>
        <td>${order.prixTotal}</td>
        <td>${order.date}</td>
    `;
    
    tbody.appendChild(row);
});