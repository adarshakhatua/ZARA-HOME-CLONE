import { navbar, footer } from "../component/navbar.js";
document.getElementById("header").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
import clickItem from "../script/click_item.js";
clickItem();

function populateInbuylaterPage() {
  var buylater = JSON.parse(localStorage.getItem("buylaterArray")) || [];
  document.getElementById("items").innerHTML = "";
  buylater.map((elem, index, array) => {
    var card = document.createElement("div");
    card.className = "card";

    var image = document.createElement("img");
    image.src = elem.imagelink1;

    var card = document.createElement("div");
    card.className = "card";

    var fav_div = document.createElement("div");
    fav_div.className = "fav-div";

    var fav = document.createElement("fav");
    fav.className = "fab";

    var buy_later_btn = document.createElement("div");
    buy_later_btn.className = "buy-later-btn";
    buy_later_btn;

    var fab_icon = document.createElement("div");
    fab_icon.className = "material-icons bag-icon";
    fab_icon.textContent = "shopping_bag";
    fab_icon.addEventListener("click", () => {
      addToBasket(elem, index);
    });

    var cross_icon = document.createElement("div");
    cross_icon.className = "material-icons cross-icon";
    cross_icon.textContent = "close";
    cross_icon.addEventListener("click", () => {
      removeItems(index);
    });

    var txt = document.createElement("div");
    txt.className = "txt";

    var name = document.createElement("div");
    name.id = "name";
    name.textContent = elem.name;

    var price_div = document.createElement("div");
    price_div.id = "price-div";

    var price = document.createElement("div");
    price.id = "price";
    price.textContent = elem.price;

    var quantity = document.createElement("div");
    quantity.id = "quantity";

    var minus = document.createElement("div");
    minus.id = "minus";
    minus.textContent = "-";
    minus.addEventListener("click", () => {
      decreaseQty(elem, array);
    });

    var count = document.createElement("div");
    count.id = "count";
    count.textContent = elem.qty;

    var plus = document.createElement("div");
    plus.id = "plus";
    plus.textContent = "+";
    plus.addEventListener("click", () => {
      increaseQty(elem, array);
    });

    var ref1 = document.createElement("div");
    ref1.id = "ref1";
    ref1.textContent = elem.ref;

    var ref2 = document.createElement("div");
    ref2.id = "ref2";

    fav.append(fab_icon, cross_icon);
    fav_div.append(fav);

    price_div.append(price, quantity);
    quantity.append(minus, count, plus);
    txt.append(name, price_div, ref1, ref2);

    card.append(image, fav_div, txt);

    document.getElementById("items").append(card);
  });

  buylaterCounter();
}

populateInbuylaterPage();

function removeItems(index) {
  let buylater = JSON.parse(localStorage.getItem("buylaterArray")) || [];
  buylater.splice(index, 1);
  localStorage.setItem("buylaterArray", JSON.stringify(buylater));
  populateInbuylaterPage();
  buylaterCounter();
  emptybuylater();
}

function addToBasket(elem, index) {
  var cart = JSON.parse(localStorage.getItem("basketArray")) || [];
  cart.push(elem);
  localStorage.setItem("basketArray", JSON.stringify(cart));
  let buylater = JSON.parse(localStorage.getItem("buylaterArray"));
  buylater.splice(index, 1);
  localStorage.setItem("buylaterArray", JSON.stringify(buylater));
  populateInbuylaterPage();
  buylaterCounter();
  cartCount();
  emptybuylater();
}

function cartCount() {
  let cart = JSON.parse(localStorage.getItem("basketArray")) || [];
  let count = 0;
  for (let i of cart) {
    count += i.qty;
  }
  document.getElementById(
    "SHOPPING-BASKET"
  ).textContent = `SHOPPING BASKET (${count})`;
}
cartCount();

function buylaterCounter() {
  let buylater = JSON.parse(localStorage.getItem("buylaterArray")) || [];
  let count = 0;
  for (let i of buylater) {
    count += i.qty;
  }
  document.getElementById("BUY-LATER").textContent = `BUY LATER (${count})`;
}

document.getElementById("SHOPPING-BASKET").addEventListener("click", () => {
  window.location.href = "/cart page/cart.html";
});

export { buylaterCounter };

function decreaseQty(elem, array) {
  if (elem.qty !== 1) {
    elem.qty--;
  }
  localStorage.setItem("buylaterArray", JSON.stringify(array));
  populateInbuylaterPage();
  cartCount();
}
function increaseQty(elem, array) {
  elem.qty++;
  localStorage.setItem("buylaterArray", JSON.stringify(array));
  populateInbuylaterPage();
  cartCount();
}

function emptybuylater() {
  let buylater = JSON.parse(localStorage.getItem("buylaterArray")) || [];
  if (buylater.length == 0) {
    let empty_card = document.createElement("div");
    empty_card.id = "empty-card";
    empty_card.textContent = "Your list of items saved for later is empty.";
    document.getElementById("items").append(empty_card);
  }
}
emptybuylater();
