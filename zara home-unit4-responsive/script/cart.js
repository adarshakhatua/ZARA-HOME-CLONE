import {navbar,footer} from "../component/navbar.js";
document.getElementById("header").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();
import clickItem from "../script/click_item.js"
clickItem();


function populateInCartPage(){
    let cart=JSON.parse(localStorage.getItem("basketArray")) ||[];
    
    document.getElementById("items").innerHTML=""
    cart.map((elem,index,array)=>{

        var image=document.createElement("img");
        image.src=elem.imagelink1

        var card=document.createElement("div");
        card.className="card"
        

        var fav_div=document.createElement("div");
        fav_div.className="fav-div"

        var fav=document.createElement("fav");
        fav.className="fab"

        var buy_later_btn=document.createElement("div");
        buy_later_btn.className="buy-later-btn"
        buy_later_btn.textContent="BUY LATER"
        buy_later_btn.addEventListener("click",()=>{addToBuylater(elem,index)})

        var fab_icon=document.createElement("div");
        fab_icon.className="material-icons fab-icon";
        fab_icon.textContent=colorWishlisticon(elem);
        fab_icon.addEventListener("click",(e)=>{addToWishlist(e,elem)});

        var cross_icon=document.createElement("div");
        cross_icon.className="material-icons cross-icon";
        cross_icon.textContent="close"
        cross_icon.addEventListener("click",()=>{removeItems(index)})

        var txt=document.createElement("div");
        txt.className="txt";

        var name=document.createElement("div");
        name.className="name";
        name.textContent=elem.name;

        var price_div=document.createElement("div")
        price_div.className="price-div";

        var price=document.createElement("div")
        price.className="price";
        price.textContent=elem.price;

        var quantity=document.createElement("div")
        quantity.className="quantity";

        var minus=document.createElement("div")
        minus.className="minus";
        minus.textContent="-"
        minus.addEventListener("click",(e)=>{decreaseQty(elem,array,e)})

        var count=document.createElement("div")
        count.className="count";
        count.textContent=elem.qty

        var plus=document.createElement("div")
        plus.className="plus";
        plus.textContent="+"
        plus.addEventListener("click",(e)=>{increaseQty(elem,array,e)})

        var ref1=document.createElement("div")
        ref1.className="ref1";
        ref1.textContent=elem.ref;
        
        var ref2=document.createElement("div")
        ref2.className="ref2";




        fav.append(buy_later_btn,fab_icon,cross_icon);
        fav_div.append(fav);

        price_div.append(price,quantity);
        quantity.append(minus,count,plus);
        txt.append(name,price_div,ref1,ref2);

        card.append(image,fav_div,txt);

        document.getElementById("items").append(card);
        
    })
    document.getElementById("empty_basket_btn").style.display="block"
    
    
}
populateInCartPage()


function removeItems(index){
    let cart=JSON.parse(localStorage.getItem("basketArray")) ||[];
    cart.splice(index,1);
    localStorage.setItem("basketArray",JSON.stringify(cart))
    populateInCartPage()
    cartCounter()
    emptycart()
}

import { buylaterCounter } from "/script/buylater.js";
function addToBuylater(elem,index){
    var buylater=JSON.parse(localStorage.getItem("buylaterArray")) || [];
    buylater.push(elem);
    localStorage.setItem("buylaterArray",JSON.stringify(buylater))

    let cart=JSON.parse(localStorage.getItem("basketArray"));
    cart.splice(index,1);
    localStorage.setItem("basketArray",JSON.stringify(cart))
    populateInCartPage()
    cartCounter()
    buylaterCounter()
    emptycart()
}

function decreaseQty(elem,array){
    if(elem.qty!==1){
        elem.qty--;
    }
    
    localStorage.setItem("basketArray",JSON.stringify(array))
    populateInCartPage()
    cartCounter()
}
function increaseQty(elem,array,e){
    elem.qty++;
    localStorage.setItem("basketArray",JSON.stringify(array));
    populateInCartPage();
    cartCounter();
}


function cartCounter(){
    let cart=JSON.parse(localStorage.getItem("basketArray")) ||[];
    var count=0;
    var price=0
    for(let i of cart){

        count+=(i.qty)
        price+=i.qty*i.price.slice(0,-2)
    }
    price=(price.toFixed(2));
    document.getElementById("SHOPPING-BASKET").textContent=`SHOPPING BASKET (${count})`
    document.getElementById("total-items").textContent=`${count} ITEMS`
    document.getElementById("total-price-including-tax-data").textContent=`${price} €`
    document.getElementById("total-price-data").textContent=`${price} €`
   
}

cartCounter()


document.getElementById("BUY-LATER").addEventListener("click",()=>{window.location.href="/cart page/buylater.html"})



function emptycart(){
    let cart=JSON.parse(localStorage.getItem("basketArray")) ||[];
    if(cart.length==0){
        document.getElementById("items").innerHTML="";
        let empty_cart=document.createElement("div");
        empty_cart.id="empty-card"

        let image=document.createElement("img");
        image.id="empty-image";
        image.src="https://symbols-electrical.getvecta.com/stencil_265/34_heat-exchanger-steam-boiler.4aab0680bb.svg";

        let empty_txt=document.createElement("div");
        empty_txt.textContent="Your shopping basket is empty";
        empty_txt.id="empty-txt";


        empty_cart.append(image,empty_txt)
        document.getElementById("items").append(empty_cart)
        document.getElementById("cart-details").style.display="none"
         document.getElementById("cart-details").style.display = "none";
        document.getElementById("empty_basket_btn").style.display = "none";
        
    } 
}
emptycart()


//add to wishlist...

function addToWishlist(e,elem){
   let wishlist=JSON.parse(localStorage.getItem("wish_list")) || [];

   var isInWishlist=false;
   for(let i=0; i<wishlist.length; i++){
     if(elem.ref==wishlist[i].ref){wishlist.splice(i,1); e.target.textContent="favorite_border"; isInWishlist=true;}
   }
   if(isInWishlist==false){e.target.textContent="favorite"; wishlist.push(elem);}

   localStorage.setItem("wish_list",JSON.stringify(wishlist));
}

//add to wishlist...

//wishlist icon...
function colorWishlisticon(elem){
    let wishlist=JSON.parse(localStorage.getItem("wish_list")) || [];
        for(let i=0; i<wishlist.length; i++){
            if(elem.ref==wishlist[i].ref){return"favorite";}
        }
        return "favorite_border";
}
//wishlist icon...

document.getElementById("process-order").addEventListener("click",()=>{window.location.href="/checkout/checkout.html"})

document.getElementById("empty_basket_btn").addEventListener("click",()=>{localStorage.setItem("basketArray",JSON.stringify([]));emptycart();cartCounter()})