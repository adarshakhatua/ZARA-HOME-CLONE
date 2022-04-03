import { navbar, footer } from "../component/navbar.js";
//console.log(navbar);
let nav_div = document.getElementById("container");
nav_div.innerHTML = navbar();

let x = document.getElementById("Indiviualreg");
let y = document.getElementById("Companyreg");

document.getElementById("Company").addEventListener("click", Company);

function Company() {
  x.style.left = "-97%";
  y.style.left = "0%";
}
document.getElementById("Individual").addEventListener("click", Individual);
function Individual() {
  x.style.left = "0%";
  y.style.left = "97%";
}

let userData = JSON.parse(localStorage.getItem("userItms")) || [];


document.getElementById("Individualaccount").addEventListener("click",Singup)

async function Singup(){
  try{
    let country =document.getElementById("select_country").value;
    let t_c=document.getElementById("t&c").checked;
    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("password").value;
    let signup={
      country:country,
      name:Name,
      email:Email,
      password:Password,
      "t&c":t_c,
    }
    signup=JSON.stringify(signup)
  

    let res =await fetch("http://3.142.246.172:5000/signup", {

    method:"POST",
    body:signup,
    headers:{
      "Content-Type":"application/json"
    },
    });
    let data=await res.json();
    if(data.errors){
      console.log(data.errors.map((elem)=>{return elem.msg}))
      alert(data.errors.map((elem)=>{return elem.msg}))
    }
    else if(data.message){
      alert(data.message)
    }
    else{

      console.log(data)
      alert("Signup successfull!");
      window.location.href="login.html"
    }
      }
  catch(err){
    console.log("error: ",err)
  }
}



function Register() {
  //console.log("hii");
  let Name = document.getElementById("name").value;
  let Email = document.getElementById("email").value;
  let Password = document.getElementById("password").value;

  function Userobj(name, number, email, pass) {
    this.username = name;
    this.usernumber = number;
    this.usermail = email;
    this.userpass = pass;
  }

  let userObj = new Userobj(Name, Number, Email, Password);
  userData.push(userObj);
  //console.log(userData);

  localStorage.setItem("userItms", JSON.stringify(userData));
  let flag = false;
  for (let i = 0; i < userData.length; i++) {
    //console.log(userData[i].username);

    if (
      userData[i].username != " " &&
      userData[i].usernumber != " " &&
      userData[i].usermail != " " &&
      userData[i].userpass != " "
    ) {
      flag = true;
      //console.log("hii");
    }
  }
  if (flag == true) {
    window.location.href = "login.html";
  } else {
    alert("Invalid Credintials");
  }
}
// document.getElementById("signin_container").style.display = "block";

// document.getElementById("container").addEventListener("click",close);
// function close(){
//         document.getElementById("signin_container").style.display = "none";

// document.getElementById("signin_container").addEventListener("click",()=>{
//     document.getElementById("signin_container").style.display = "block";

// })
// }
