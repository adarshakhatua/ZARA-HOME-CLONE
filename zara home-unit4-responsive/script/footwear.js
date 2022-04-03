import getData from "../script/data.js";
import {navbar,footer} from "../component/navbar.js";
document.getElementById("header").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();
import clickItem from "../script/click_item.js";

clickItem()

fetchData();
async function fetchData(){
    try{
        var res =await fetch(`http://3.142.246.172:5000/footwear_men_women?pageSize=20&pageNumber=1}`);
        var data =await res.json();
        
        var total=data.TotalCount
        console.log(data)
        document.getElementById("item-count").textContent=`${total} ITEMS`
        mapDataToFootwearPage(data.footwear_men_women)
    }
    catch(err){
        console.log(err);
    }
}


//var women=getData("data_footwear_women");
// mapDataToFootwearPage(women)

//z-index......
document.getElementById("sidebar-div").addEventListener("mouseover", ()=>{
        document.querySelectorAll(".txt").forEach((e)=>{
            e.style.zIndex="-1"; 
        });
});
document.getElementById("container").addEventListener("mouseover", ()=>{
    document.querySelectorAll(".txt").forEach((e)=>{
      e.style.zIndex="1";
    });
});
//z-index......

function mapDataToFootwearPage(input){
    document.getElementById("content").innerHTML=""
    localStorage.setItem("Footwear_Data",JSON.stringify(input))
    input.map((elem)=>{

        var card=document.createElement("div");
        card.className="card";

        var image=document.createElement("img");
        image.src=elem.imagelink1;

        var add_to_basket_btn=document.createElement("div");
        add_to_basket_btn.className="add-to-basket-btn";
        add_to_basket_btn.textContent="ADD TO BASKET";
        add_to_basket_btn.addEventListener("click", ()=>{addToBasket(elem)})

        var txt=document.createElement("div");
        txt.className="txt";

        var name=document.createElement("div");
        name.className="name";
        name.textContent=elem.name;
        name.addEventListener("click",()=>{localStorage.setItem("Data_single",JSON.stringify(elem));window.location.href="/product page/product.html"})

        var price=document.createElement("div");
        price.className="price";
        price.textContent=elem.price;
        
        txt.append(name,price);
        card.append(image,add_to_basket_btn,txt);
        document.getElementById("content").append(card);
    })
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






