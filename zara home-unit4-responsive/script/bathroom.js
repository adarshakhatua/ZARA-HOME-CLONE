import { navbar, footer } from "../component/navbar.js";
console.log(navbar);
let nav_div = document.getElementById("header");
nav_div.innerHTML = navbar();

import clickItem from "../script/click_item.js";
clickItem();
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();



// Homepage\scripts\click_item.js
var data = [
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2021/I/4/1/p/5581/013/807/5581013807_7_1_3.jpg?t=1633013215363",
    name: "JACQUARD LEOPARD TOWEL",
    price: "45.99 €  - 59.99 €",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/5583/013/710/5583013710_7_1_3.jpg?t=1642586366729",
    name: "VELOUR STRIPED TOWEL",
    price: "59.99 € ",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/5583/013/802/5583013802_7_1_3.jpg?t=1642586366819",
    name: "WAFFLE-KNIT COTTON TOWEL WITH RECYCLED POLYESTER",
    price: "45.99 € ",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/7590/013/250/7590013250_7_1_3.jpg?t=1639069949671",
    name: "TOWEL WITH LINEN BORDER",
    price: "45.99 € ",
  },

  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/7545/013/800/7545013800_2_7_5.jpg?t=1638887730114",
    name: "EXTRA SOFT TOWEL WITH DOUBLE BORDER",
    price: "69.99 €  - 99.99 € ",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4512/013/825/4512013825_7_1_3.jpg?t=1637927432426",
    name: "EMBROIDERED SCALLOPED EDGE TOWEL",
    price: "59.99 € ",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/7590/013/800/7590013800_2_7_5.jpg?t=1640789085642",
    name: "HIGH QUALITY COTTON TOWEL",
    price: "78.99 € ",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/6590/013/815/6590013815_7_1_3.jpg?t=1639064797050",
    name: "EXTRA SOFT TOWEL WITH DOUBLE BORDER",
    price: "86.99 € ",
  },

  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/3590/002/711/3590002711_2_7_5.jpg?t=1638285773286",
    name: "HIGH QUALITY COTTON TOWEL",
    price: "45.99 €  - 59.99 €",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/3590/013/250/3590013250_7_1_3.jpg?t=1639126952466",
    name: "ECOLOGICALLY GROWN COTTON TOWEL",
    price: "59.99 € ",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/3590/002/250/3590002250_2_7_5.jpg?t=1639043345709",
    name: "MINI FLORAL PRINT MUSLIN CLOTH (PACK OF 3)",
    price: "45.99 € ",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6544/013/250/6544013250_7_1_3.jpg?t=1623926717193",
    name: "FLORAL JACQUARD TOWEL WITH TASSELS",
    price: "45.99 € ",
  },

  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/6590/013/250/6590013250_7_1_3.jpg?t=1639049273425",
    name: "TOWEL WITH EMBROIDERED LEAVES",
    price: "69.99 €  - 99.99 € ",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/6590/002/250/6590002250_2_6_5.jpg?t=1638354826000",
    name: "(PACK OF 3) FLORAL JACQUARD TOWELS",
    price: "59.99 € ",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2021/I/4/1/p/5530/013/737/5530013737_7_1_3.jpg?t=1628854271081",
    name: "COTTON TERRY BATH-MITT",
    price: "78.99 € ",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2021/I/4/1/p/7533/013/711/7533013711_2_7_5.jpg?t=1633013223083",
    name: "(PACK OF 3) LEOPARD JACQUARD TOWELS",
    price: "45.99 €  - 59.99 €",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/6540/013/711/6540013711_2_7_5.jpg?t=1644314113017",
    name: "VELOUR STRIPED TOWEL",
    price: "59.99 € ",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2021/I/4/1/p/8540/013/251/8540013251_7_1_3.jpg?t=1626106845587",
    name: "JACQUARD LEOPARD TOWEL",
    price: "45.99 € ",
  },
  {
    imgUrl:
      "https://static.zarahome.net/8/photos4/2022/V/4/1/p/9530/013/051/9530013051_2_7_5.jpg?t=1644315607181",
    name: "JACQUARD COTTON TOWEL",
    price: "45.99 € ",
  },
];

data.map(function (elem) {
  var bath_card = document.createElement("div");
  var bath_card_div = document.createElement("div");
  var card = document.createElement("div");
  bath_card_div.style.backgroundImage = `url(${elem.imgUrl})`;
  bath_card_div.id = "buttondiv";
  // var image = document.createElement("img");
  // image.setAttribute("src", elem.imgUrl);

  var button = document.createElement("button");
  button.textContent = "Add to Basket";

  var item_name = document.createElement("p");
  item_name.textContent = elem.name;

  var price = document.createElement("p");
  price.innerHTML = elem.price;

  bath_card.append(item_name, price);
  bath_card_div.append(button, bath_card);
  card.append(bath_card_div, bath_card);
  document.querySelector("#bathcontainer").append(card);
});



