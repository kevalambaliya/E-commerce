let cartItem = JSON.parse(localStorage.getItem("cartItem"));
let quantity = 1;

function updateitem() {
    document.getElementById("quantity").innerText = quantity;
}

function prCartItem() {
    if (cartItem) {
        let cartElement = document.getElementById("cartItem");
        cartElement.innerHTML = "";

        let div = document.createElement("div");

        let title = document.createElement("h5");
        let disc = document.createElement("p");
        let price = document.createElement("price");
        let img = document.createElement("img");
        let quantityDiv = document.createElement("div");


        title.innerHTML = cartItem.title;
        title.classList = "cart-h3";

        disc.innerHTML = cartItem.description;
        disc.classList = "grid-p";

        price.innerHTML = cartItem.price;
        price.classList = "cart-h4";

        img.src = cartItem.images;
        img.classList = "product-main";
        img.style = "width: 300px";

        quantityDiv.classList = "quantity-control";
        quantityDiv.innerHTML = `
                    <button class="btn btn-secondary" id="decrease">-</button>
                    <span id="quantity">${quantity}</span>
                    <button class="btn btn-secondary" id="increase">+</button>
                `;

        div.append(img);
        div.append(title);
        div.append(disc);
        div.append(price);
        div.append(quantityDiv);

        cartElement.append(div);

        document.getElementById("decrease").addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                updateitem();
            }
            else {
                localStorage.removeItem("cartItem");
                window.location.href = "home.html";
            }
        });

        document.getElementById("increase").addEventListener("click", () => {
            quantity++;
            updateitem();
        });
    }
}

prCartItem();
