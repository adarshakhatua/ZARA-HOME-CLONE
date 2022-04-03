
import {navbar} from "../component/navbar.js";
//console.log(navbar);
let nav_div = document.getElementById("logdiv");
nav_div.innerHTML = navbar();

// import clickItem from "../Homepage/scripts/click_item.js";
// clickItem();
// let footer_div = document.getElementById("footer");
// footer_div.innerHTML = footer();

document.querySelector("form").addEventListener("submit", signin);
let rus = JSON.parse(localStorage.getItem("userItms"));

async function signin(event) {
   event.preventDefault();

    let userem = document.querySelector("#email").value;
    let userpasswd = document.querySelector("#password").value;

    let login ={
        email:userem,
        password:userpasswd
    }
    login=JSON.stringify(login)

    let res=await fetch("http://3.142.246.172:5000/signin", {
        method:"POST",
        body:login,
        headers:{
            "Content-Type":"application/json"
          },
    });

    let data =await res.json();
    console.log(data)
    if(data.user){
        alert("login Successfull");
        console.log(data.user.name)
        let userLog={name:data.user.name,
                    email:data.user.email,
                    country:data.user.country,}
        localStorage.setItem("user_login",JSON.stringify(userLog))
        
        //document.getElementById("login_text").style.display="none";

        window.location.href="../index.html";
    }
    else if(data.message){
        alert(data.message)
    }

    // let userLog=JSON.parse(localStorage.getItem("userLog"))||[];


    //document.getElementById("user-details").textContent=
    // let flag = false;
    // for (var i = 0; i < rus.length; i++) {
    //     if (rus[i].usermail == userem && rus[i].userpass == userpasswd) {
    //         flag = true;
    //         // window.location.href = "./index.html";
    //         console.log("hii")
    //     }
    // }
    // if (flag == true) {
    //     window.location.href = "../Homepage/index.html";
    //        console.log("hlo");
    // }
    // // Homepage\index.html
    // else {
    //     alert("Invalid Credentials")
    //        console.log("bye");
    // }
}

// document.getElementById("logdiv").addEventListener("mouseover",close);
// function close(){
//     if 
//       (document.getElementById("login_container").style.display = "display")
//     {
//       document.getElementById("login_container").style.display = "none";
//     }
// }
document.getElementById("login_text").innerText=JSON.parse(localStorage.getItem("user_login")).name