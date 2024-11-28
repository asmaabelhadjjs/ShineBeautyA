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