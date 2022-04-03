import {navbar,footer} from "../component/navbar.js";
import clickItem from "../script/click_item.js";
document.getElementById("header").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();

clickItem()

function mapDataToProductPage(){

    let data=JSON.parse(localStorage.getItem("Data_single"));
    console.log(data)
    var img1=document.getElementById("img1")
    img1.src=data.imagelink1
    var img2=document.getElementById("img2")
    img2.src=data.imagelink2
    var img3=document.getElementById("img3")
    img3.src=data.imagelink3
    var img4=document.getElementById("img4")
    img4.src=data.imagelink4
    var img5=document.getElementById("img5")
    img5.src=data.imagelink5
    var name=document.getElementById("name")
    name.textContent=data.name
    var price=document.getElementById("price")
    price.textContent=data.price
    var ref=document.getElementById("ref-txt")
    ref.textContent=data.ref
    var description=document.getElementById("description")
    description.textContent=data.description
    var p35=document.getElementById("p35")
    if(data.size[0]==0){p35.textContent="NA";;p35.parentElement.style.cursor="not-allowed";
                        p35.parentElement.style.color="gray";p35.style.display="inline-block";
                        p35.previousElementSibling.style.display="none"}
    else{p35.textContent=`${data.size[0]} €`}
    
    var p36=document.getElementById("p36")
    if(data.size[1]==0){p36.textContent="NA";p36.parentElement.style.cursor="not-allowed";
                        p36.parentElement.style.color="gray";p36.style.display="inline-block";
                        p36.previousElementSibling.style.display="none"}
    else{p36.textContent=`${data.size[1]} €`}

    var p37=document.getElementById("p37")
    if(data.size[2]==0){p37.textContent="NA";p37.parentElement.style.cursor="not-allowed";
                        p37.parentElement.style.color="gray";p37.style.display="inline-block";
                        p37.previousElementSibling.style.display="none"}
    else{p37.textContent=`${data.size[2]} €`}

    var p38=document.getElementById("p38")
    if(data.size[3]==0){p38.textContent="NA";;p38.parentElement.style.cursor="not-allowed";
                        p38.parentElement.style.color="gray";p38.style.display="inline-block";
                        p38.previousElementSibling.style.display="none"}
    else{p38.textContent=`${data.size[3]} €`}

    var p39=document.getElementById("p39")
    if(data.size[4]==0){p39.textContent="NA";p39.parentElement.style.cursor="not-allowed";
                        p39.parentElement.style.color="gray";p39.style.display="inline-block";
                        p39.previousElementSibling.style.display="none"}
    else{p39.textContent=`${data.size[4]} €`}

    var p40=document.getElementById("p40")
    if(data.size[5]==0){p40.textContent="NA";p40.parentElement.style.cursor="not-allowed";
                        p40.parentElement.style.color="gray";p40.style.display="inline-block";
                        p40.previousElementSibling.style.display="none"}
    else{p40.textContent=`${data.size[5]} €`}

    var p41=document.getElementById("p41")
    if(data.size[6]==0){p41.textContent="NA";p41.parentElement.style.cursor="not-allowed";
                        p41.parentElement.style.color="gray";p41.style.display="inline-block";
                        p41.previousElementSibling.style.display="none"}
    else{p41.textContent=`${data.size[6]} €`}

    var p42=document.getElementById("p42")
    if(data.size[7]==0){p42.textContent="NA";p42.parentElement.style.cursor="not-allowed";
                        p42.parentElement.style.color="gray";p42.style.display="inline-block";
                        p42.previousElementSibling.style.display="none"}
    else{p42.textContent=`${data.size[7]} €`}

    var related_img=document.getElementById("related-img")
    var related_name=document.getElementById("related_name")
    var related_price=document.getElementById("related_price")

    let relatedArray=JSON.parse(localStorage.getItem("Footwear_Data"))
    let index=Math.floor(Math.random()*12)
    related_img.src=relatedArray[index].imagelink1
    related_name.textContent=relatedArray[index].name
    related_price.textContent=relatedArray[index].price

}


mapDataToProductPage()

document.getElementById("add_to_basket").addEventListener("click",addToBasket)

function addToBasket(){
    var elem=JSON.parse(localStorage.getItem("Data_single"))
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
