// productDetails.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.getElementById('addToCartButton');
    const productName = document.getElementById('productName').textContent;
    const productPrice = document.getElementById('productPrice').textContent;

    addToCartButton.addEventListener('click', () => {
        alert(`${productName} wurde zum Warenkorb hinzugefügt.`);
    });
});
