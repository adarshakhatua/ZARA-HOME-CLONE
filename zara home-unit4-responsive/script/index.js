import { navbar, footer } from "../component/navbar.js";
console.log(navbar)
document.getElementById("header").innerHTML = navbar();
import clickItem from "./click_item.js";

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

clickItem();


