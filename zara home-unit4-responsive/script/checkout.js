import { navbar, footer } from "../component/navbar.js";
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

function submitCheck() {
  let name = document.getElementById("name").value;
  let addresss = document.getElementById("addresss").value;
  console.log(addresss);
  let city = document.getElementById("city").value;
  let surname = document.getElementById("surname").value;

  if (name === "") {
    alert("Please Enter Your Name");
  } else if (addresss == "") {
    alert("Please Enter Your Address");
  } else if (city == "") {
    alert("Please Enter Your City");
  } else if (surname == "") {
    alert("Please Enter Your Sarname");
  } else {
    window.location.href = "../payment/payment.html";
  }
}

document.getElementById("continue").addEventListener("click", submitCheck);
