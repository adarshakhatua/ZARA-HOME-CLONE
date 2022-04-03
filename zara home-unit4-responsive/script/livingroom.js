import { navbar, footer } from "../component/navbar.js";
// Home\components\navbar.js
console.log(navbar);
let nav_div = document.getElementById("livecon");
nav_div.innerHTML = navbar();

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

import clickItem from "../script/click_item.js";
clickItem();

var data = [
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/1550/031/802/1550031802_7_1_3.jpg?t=1642585455406",
    name: "COTTON POUFFE",
    price: "99.99 € ",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/1550/031/737/1550031737_7_1_3.jpg?t=1642585455352",
    name: "COTTON POUFFE",
    price: "99.99 € ",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/3137/073/712/3137073712_7_1_3.jpg?t=1644939786094",
    name: "FAUX SHEARLING ARMCHAIR",
    price: "199.99 € ",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4118/072/251/4118072251_7_1_3.jpg?t=1642585743994",
    name: "MARBLE SIDE TABLE",
    price: "79.99 € ",
  },

  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4118/072/733/4118072733_7_1_3.jpg?t=1642610827328",
    name: "MARBLE SIDE TABLE",
    price: "79.99 € ",
  },
];

data.map(function (elem) {
  var living_card = document.createElement("div");
  var living_card_div = document.createElement("div");
  var card = document.createElement("div");
  living_card_div.style.backgroundImage = `url(${elem.imgUrl})`;
  living_card_div.id = "buttondiv";
  // var image = document.createElement("img");
  // image.setAttribute("src", elem.imgUrl);

  var button = document.createElement("button");
  button.textContent = "Add to Basket";

  var item_name = document.createElement("p");
  item_name.textContent = elem.name;

  var price = document.createElement("p");
  price.innerHTML = elem.price;

  living_card.append(item_name, price);
  living_card_div.append(button, living_card);
  card.append(living_card_div, living_card);
  document.querySelector("#livecontainer").append(card);
});
