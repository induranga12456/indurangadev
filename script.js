let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        cartItems.innerHTML += `<p>${item.productName} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button></p>`;
    });

    cartTotal.innerHTML = total.toFixed(2);
    cartCount.innerHTML = cart.length;
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}
