let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;

    const cartList = document.getElementById("cart-list");
    const cartItem = document.createElement("li");
    cartItem.textContent = ` ${product} - €${price}`;
    cartList.appendChild(cartItem);

    document.getElementById("cart-total").textContent = `Total: €${total}`;
}

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    let valid = true;

    const phoneRegex = /^[0-9]{9}$/;

    if (!name) {
        document.getElementById("error-name").textContent = "El nom és obligatori.";
        valid = false;
    } else {
        document.getElementById("error-name").textContent = "";
    }

    if (!email) {
        document.getElementById("error-email").textContent = "El correu és obligatori.";
        valid = false;
    } else {
        document.getElementById("error-email").textContent = "";
    }

    if (!phone || !phoneRegex.test(phone)) {
        document.getElementById("error-phone").textContent = "Introdueix un telèfon válid (9 dígits).";
        valid = false;
    } else {
        document.getElementById("error-phone").textContent = "";
    }

    if (valid) {
        alert("Formulario enviat amb éxit.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const footerInfo = document.getElementById("footer-info");
    footerInfo.textContent = `Navegador: ${navigator.userAgent}, Idioma: ${navigator.language}, Hora: ${new Date().toLocaleTimeString()}`;
});
