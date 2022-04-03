import { navbar, footer } from "../component/navbar.js";
console.log(navbar);
let nav_div = document.getElementById("nav-div");
nav_div.innerHTML = navbar();

import clickItem from "../script/click_item.js";
clickItem();
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

