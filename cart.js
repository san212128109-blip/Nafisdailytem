function displayCart() {
    const cartList = document.querySelector(".cart-list");
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cartList.innerHTML = "";
    if(cart.length === 0) {
        cartList.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(p => {
            const div = document.createElement("div");
            div.innerHTML = `<p>${p.name} - $${p.price}</p>`;
            cartList.appendChild(div);
        });
    }
}

function checkout() {
    localStorage.removeItem("cart");
    alert("Checkout successful!");
    displayCart();
}

displayCart();
