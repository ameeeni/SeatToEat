document.addEventListener('DOMContentLoaded', function() {
    // Retrieve product details from localStorage
    var name = localStorage.getItem("name");
    var price = localStorage.getItem("price");
    var imageSrc = localStorage.getItem("image");
    var storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    var newProduct = {
        name: name,
        price: price,
        image: imageSrc
    };
    storedProducts.push(newProduct);
    storedProducts.forEach(function(product) {
        displayCartItem(product.name, product.price, product.image);
    }); 
    calculateTotal();
});
function displayCartItem(name, price, imageSrc) {
    var cartItemContainer = document.querySelector('.cart-item-container');
    var cartItemsDiv = document.createElement('div');
    cartItemsDiv.classList.add('cart-items');
    var parsedPrice = parseFloat(price); /*Jai parsé le prix parce que il va lire le prix en tant que string*/
    if (!isNaN(parsedPrice)) {
    cartItemsDiv.innerHTML = `
        <div class="cart-item">
            <img src="${imageSrc}" alt="${name}">
            <div class="item-details">
                <h4>${name}</h4>
                <p>${price}</p>
            </div>
        </div>
    `;}
    cartItemContainer.appendChild(cartItemsDiv);
}

function calculateTotal() {
    var cartItems = document.querySelectorAll('.cart-item');
    var total = 0;
    cartItems.forEach(function(item) {
        var price = parseFloat(item.querySelector('.item-details p').innerText.replace('$', ''));
        total += price;
    });
    var cartTotalContainer = document.querySelector('.cart');
    var cartTotal = document.querySelector('.cart-total');
    var cartPrice = document.createElement("p");
    cartPrice.classList.add("price");
    cartPrice.textContent = `Total: ${total.toFixed(3)}DT`;
    cartTotal.appendChild(cartPrice);
}

