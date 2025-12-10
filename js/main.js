const products = [
    {id: 1, name: "Product A", price: 100, image: "images/product1.jpg"},
    {id: 2, name: "Product B", price: 150, image: "images/product2.jpg"},
    {id: 3, name: "Product C", price: 200, image: "images/product3.jpg"}
];

const productContainer = document.querySelector(".product-list");

function displayProducts(list) {
    productContainer.innerHTML = "";
    list.forEach(p => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="${p.image}" alt="${p.name}" width="150">
            <h3>${p.name}</h3>
            <p>Price: $${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        `;
        productContainer.appendChild(div);
    });
}

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(products.find(p => p.id === id));
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
}

displayProducts(products);
