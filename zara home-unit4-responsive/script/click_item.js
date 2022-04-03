function clickItem(){
    document.getElementById("id0").addEventListener("click",()=>{
        document.getElementById("id00").style.display="block";
        document.getElementById("id11").style.display="none";
        document.getElementById("id22").style.display="none";
        document.getElementById("id33").style.display="none";
        document.getElementById("id44").style.display="none";
        document.getElementById("id55").style.display="none";
        document.getElementById("id66").style.display="none";
        document.getElementById("id88").style.display="none";
       
    });
    document.getElementById("id1").addEventListener("click",()=>{
        document.getElementById("id11").style.display="block";
        document.getElementById("id00").style.display="none";
        document.getElementById("id22").style.display="none";
        document.getElementById("id33").style.display="none";
        document.getElementById("id44").style.display="none";
        document.getElementById("id55").style.display="none";
        document.getElementById("id66").style.display="none";
        document.getElementById("id88").style.display="none";
    });
    document.getElementById("id2").addEventListener("click",()=>{
        document.getElementById("id22").style.display="block";
        document.getElementById("id00").style.display="none";
        document.getElementById("id11").style.display="none";
        document.getElementById("id33").style.display="none";
        document.getElementById("id44").style.display="none";
        document.getElementById("id55").style.display="none";
        document.getElementById("id66").style.display="none";
        document.getElementById("id88").style.display="none";
    });
    document.getElementById("id3").addEventListener("click",()=>{
        document.getElementById("id33").style.display="block";
        document.getElementById("id00").style.display="none";
        document.getElementById("id11").style.display="none";
        document.getElementById("id22").style.display="none";
        document.getElementById("id44").style.display="none";
        document.getElementById("id55").style.display="none";
        document.getElementById("id66").style.display="none";
        document.getElementById("id88").style.display="none";

    });
    document.getElementById("id4").addEventListener("click",()=>{
        document.getElementById("id44").style.display="block";
        document.getElementById("id00").style.display="none";
        document.getElementById("id11").style.display="none";
        document.getElementById("id22").style.display="none";
        document.getElementById("id33").style.display="none";
        document.getElementById("id55").style.display="none";
        document.getElementById("id66").style.display="none";
        document.getElementById("id88").style.display="none";
    });
    document.getElementById("id5").addEventListener("click",()=>{
        document.getElementById("id55").style.display="block";
        document.getElementById("id00").style.display="none";
        document.getElementById("id11").style.display="none";
        document.getElementById("id22").style.display="none";
        document.getElementById("id33").style.display="none";
        document.getElementById("id44").style.display="none";
        document.getElementById("id66").style.display="none";
        document.getElementById("id88").style.display="none";
    });
    document.getElementById("id6").addEventListener("click",()=>{
        document.getElementById("id66").style.display="block";
        document.getElementById("id00").style.display="none";
        document.getElementById("id11").style.display="none";
        document.getElementById("id22").style.display="none";
        document.getElementById("id33").style.display="none";
        document.getElementById("id44").style.display="none";
        document.getElementById("id55").style.display="none";
        document.getElementById("id88").style.display="none";
    });
    document.getElementById("id8").addEventListener("click",()=>{
        document.getElementById("id88").style.display="block";
        document.getElementById("id00").style.display="none";
        document.getElementById("id11").style.display="none";
        document.getElementById("id22").style.display="none";
        document.getElementById("id33").style.display="none";
        document.getElementById("id44").style.display="none";
        document.getElementById("id55").style.display="none";
        document.getElementById("id66").style.display="none";
    });
   
    
    let userLog=JSON.parse(localStorage.getItem("user_login")) ||{name:"LOG IN"};
    document.getElementById("login_text").textContent=userLog.name;


    function cartCounter(){
        let cart=JSON.parse(localStorage.getItem("basketArray")) ||[];
        var count=0;
        // var price=0
        for(let i of cart){
    
            count+=(i.qty)
            // price+=i.qty*i.price.slice(0,-2)
        }
        // price=(price.toFixed(2));
        document.getElementById("BASKET").textContent=`BASKET (${count})`
        // document.getElementById("total-items").textContent=`${count} ITEMS`
        // document.getElementById("total-price-including-tax-data").textContent=`${price} €`
        // document.getElementById("total-price-data").textContent=`${price} €`
       
    }
   setInterval(cartCounter,500) 
    
}


export default clickItem;

