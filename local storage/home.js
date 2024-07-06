let items = [
    {
      title: "Set Wet",
      description:
        "Set Wet Fire Perfume for Men, 100ml|Woody Long Lasting Perfume for Men|Gift for Men|Best Date Night Fragrance",
        "price": "₹645",
        images: "https://m.media-amazon.com/images/I/61x4AVdf7fL._AC_UL480_FMwebp_QL65_.jpg",
        button:` <button class="button-55" role="button" onclick="cart()" >Add to cart</button>`
    },
    {
      title: "Park Avenue",
      description:
        "Park Avenue Euphoria, Eau De Parfum Men, 100Ml Long Lasting Perfume Spray For Men Premium Luxury Fragrance Scent Aromatic Blend Of Amber & Musk Suitable For Every Occasion",
        "price": "₹317",
        images: "https://m.media-amazon.com/images/I/61zBq6pkFFL._AC_UL480_FMwebp_QL65_.jpg",
        button:` <button class="button-55" role="button" onclick="cart()" >Add to cart</button>`
    },
    {
      title: "Boat 148",
      description:
      "boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black), in Ear",
      "price": "₹1,299",
      images: "https://m.media-amazon.com/images/I/61KNJav3S9L._AC_UY327_FMwebp_QL65_.jpg",
      button:` <button class="button-55" role="button" onclick="cart()" >Add to cart</button>`
  },
  {
      title: "Oneplus Ce4",
      description:
      "Oneplus Nord Ce4 (Celadon Marble, 8Gb Ram, 128Gb Storage), Sea Green",
      "price": "₹24,999",
      images: "https://m.media-amazon.com/images/I/61nxQ62qglL._AC_SR155,154_QL70_.jpg",
        button:` <button class="button-55" role="button" onclick="cart()" >Add to cart</button>`
    },
    {
      title: "Boat Headphone",
      description:
      "boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Luscious Black)",
      "price": "₹1,999",
      images: "https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UY327_FMwebp_QL65_.jpg",
        button:` <button class="button-55" role="button" onclick="cart()" >Add to cart</button>`
    },
    {
      title: "men's Jacket",
      description:
      "MIA FASHION Men's Bomber Jacket, Lightweight Transition Jacket, Aviator Jackets, Spring, Autumn Blouson with Pockets",
      "price": "₹999",
      images: "https://m.media-amazon.com/images/I/61SD6NfzdpL._AC_UL480_FMwebp_QL65_.jpg",
        button:` <button class="button-55" role="button" onclick="cart()" >Add to cart</button>`
    },
    {
      title: "Helicopter Toys",
      description:
      "Helicopter with Radio Remote Control and Hand Sensor Charging Helicopter 2 in 1 Toys with 3D Light Toys for Boys Kids ",
      "price": "₹24,999",
      images: "https://m.media-amazon.com/images/I/61PaGVK8HRL._AC_UL480_FMwebp_QL65_.jpg",
        button:` <button class="button-55" role="button" onclick="cart()" >Add to cart</button>`
    },
    {
      title: "Fire-Boltt Gladiator 1.96",
      description:
      " Biggest Display Luxury Stainless Steel Smart Watch with Bluetooth Calling, Voice Assistant &123 Sports Modes, 8 Unique UI Interactions, 24/7 Heart Rate Tracking ",
      "price": "₹1,499",
      images: "https://m.media-amazon.com/images/I/417H91rn8xL._SX300_SY300_QL70_FMwebp_.jpg",
        button:` <button class="button-55" role="button" onclick="cart()" >Add to cart</button>`
    },
    
  ];
  
  items.forEach((val , index) => {
      let cart_items = document.getElementById("additems");
      let div = document.createElement("div");
      let img = document.createElement("img");
      let title = document.createElement("h4");
      let des = document.createElement("p");
      let per = document.createElement("h4");
      let but = document.createElement("button");
  
  
      div.classList = "grid-item" , "gird-text";
      img.src = val.images;
      img.classList = "grid-img";
  
      title.innerHTML = val.title;
      title.classList.add("cart-h4");
  
      des.innerHTML = val.description;
      des.classList = "grid-p";
  
      per.innerHTML = val.price;
      per.className = "cart-h4";
  
      but.innerHTML = val.button;
      but.classList = "btn btn-primary add-to-cart";
      but.setAttribute("data-index", index);
  
  
      div.append(img);
      div.append(title);
      div.append(des);
      div.append(per);
      div.append(but);
      cart_items.append(div);
  })

  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        let index = this.getAttribute("data-index");
        localStorage.setItem("cartItem", JSON.stringify(items[index]));
        window.location.href = "cart.html";
    });
});

