
import { navbar, footer } from "../component/navbar.js";
// Home\components\navbar.js
//console.log(navbar);
let nav_div = document.getElementById("bedcon");
nav_div.innerHTML = navbar();

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

import clickItem from "../script/click_item.js";
clickItem();

// var data = [
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_7_1_3.jpg?t=1632324449360",
//         name:"REVERSIBLE FLANNEL DUVET COVER",
//         price:"45.99 €  - 59.99 €",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_7_1_3.jpg?t=1630912807357",
//         name:"TOILE DE JOUY PRINT DUVET COVER",
//         price:"59.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/1150/088/250/1150088250_7_1_3.jpg?t=1642428608750",
//         name:"MELANGE BAMBOO DUVET COVER",
//         price:"45.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6101/088/300/6101088300_7_1_3.jpg?t=1632405184789",
//         name:"MINI FLORAL PRINT DUVET COVER",
//         price:"45.99 € ",
       
//     },

//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6124/088/250/6124088250_7_1_3.jpg?t=1635935233667",
//         name:"DYED THREAD PERCALE DUVET COVER",
//         price:"69.99 €  - 99.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/3117/088/250/3117088250_7_1_3.jpg?t=1638180608729",
//         name:"TOILE DE JOUY PRINT DUVET COVER",
//         price:"59.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6113/088/406/6113088406_7_1_3.jpg?t=1636370351813",
//         name:"(140 GSM) WASHED LINEN DUVET COVER",
//         price:"78.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/0107/088/802/0107088802_7_1_3.jpg?t=1637163312195",
//         name:"MINI FLORAL PRINT DUVET COVER",
//         price:"86.99 € ",
       
//     },

//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_7_1_3.jpg?t=1632324449360",
//         name:"REVERSIBLE FLANNEL DUVET COVER",
//         price:"45.99 €  - 59.99 €",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_7_1_3.jpg?t=1630912807357",
//         name:"TOILE DE JOUY PRINT DUVET COVER",
//         price:"59.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/1150/088/250/1150088250_7_1_3.jpg?t=1642428608750",
//         name:"MELANGE BAMBOO DUVET COVER",
//         price:"45.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6101/088/300/6101088300_7_1_3.jpg?t=1632405184789",
//         name:"MINI FLORAL PRINT DUVET COVER",
//         price:"45.99 € ",
       
//     },
    
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6124/088/250/6124088250_7_1_3.jpg?t=1635935233667",
//         name:"DYED THREAD PERCALE DUVET COVER",
//         price:"69.99 €  - 99.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/3117/088/250/3117088250_7_1_3.jpg?t=1638180608729",
//         name:"TOILE DE JOUY PRINT DUVET COVER",
//         price:"59.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6113/088/406/6113088406_7_1_3.jpg?t=1636370351813",
//         name:"(140 GSM) WASHED LINEN DUVET COVER",
//         price:"78.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_7_1_3.jpg?t=1632324449360",
//         name:"REVERSIBLE FLANNEL DUVET COVER",
//         price:"45.99 €  - 59.99 €",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_7_1_3.jpg?t=1630912807357",
//         name:"TOILE DE JOUY PRINT DUVET COVER",
//         price:"59.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/1150/088/250/1150088250_7_1_3.jpg?t=1642428608750",
//         name:"MELANGE BAMBOO DUVET COVER",
//         price:"45.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6101/088/300/6101088300_7_1_3.jpg?t=1632405184789",
//         name:"MINI FLORAL PRINT DUVET COVER",
//         price:"45.99 € ",
       
//     }
// ]

let fetchData =async function(){
    try{
        let res=await fetch("http://3.142.246.172:5000/bedroom");
        var data =await res.json()
        console.log(data.Bedroom)
        data =data.Bedroom;
        populateData(data)
    }
    catch(err){
        console.log(err)
    }
}
fetchData();


function populateData(data){
    data.map(function(elem){
    
        var bed_card = document.createElement("div");
         var bed_card_div = document.createElement("div");
         var card = document.createElement("div");
        bed_card_div.style.backgroundImage = `url(${elem.imagelink1})`;
        bed_card_div.id = "buttondiv";
        // var image = document.createElement("img");
        // image.setAttribute("src", elem.imgUrl);
    
        var button = document.createElement("button");
        button.textContent = "Add to Basket";
    
        var item_name = document.createElement("p");
        item_name.textContent = elem.name;
        item_name.id="item-name"
        item_name.addEventListener("click",()=>{localStorage.setItem("Data_single",JSON.stringify(elem));window.location.href="/product page/product.html"})
    
        var price = document.createElement("p");
        price.innerHTML = elem.price;
    
    
        bed_card.append(item_name,price);
        bed_card_div.append(button,bed_card);
        card.append(bed_card_div,bed_card);
        document.querySelector("#bedcontainer").append(card);
    
    });
}
function addToBasket(elem){
    var basketArray=JSON.parse(localStorage.getItem("basketArray"))||[];
    if(basketArray.length==0){
        basketArray.push(elem);
    }
    else{
        var match=false;
        for(var i=0;i<basketArray.length;i++){
            if(basketArray[i].ref==elem.ref ){
            match=true;
            break;
            }
        }
        if(match){
            basketArray[i].qty++;
        }
        else{
            basketArray.push(elem);  
        }
    }
    
    localStorage.setItem("basketArray",JSON.stringify(basketArray))

}

 


