import { navbar, footer } from "../component/navbar.js";
console.log(navbar);
let nav_div = document.getElementById("help");
nav_div.innerHTML = navbar();

import clickItem from "../script/click_item.js";
clickItem();
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

document.querySelectorAll(".accordion__button").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;
    button.classList.toggle("accordion__button--active");
    if (button.classList.contains("accordion__button--active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});