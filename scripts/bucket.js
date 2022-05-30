// On clicking remove button the item should be removed from DOM as well as localstorage.


var arr2 = JSON.parse(localStorage.getItem("coffee"));

console.log("arr2",arr2);

var total = arr2.reduce(function (sum,el,index,arr){
          return sum+Number(el.price)
},0)
 
document.querySelector("#total_amount").innerText = total

console.log(total)
var buk = document.getElementById("bucket")
arr2.map(function(el,index){
    var div = document.createElement("div");

        var img = document.createElement("img");
        img.src = el.image;
        
        var name = document.createElement("p");
        name.innerText = el.title;

        var price = document.createElement("p");
        price.innerText = el.price;

        var btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.setAttribute("id","remove_coffee")
        btn.addEventListener("click",function(){
            removebutton(el,index);
        })
        div.append(img,name,price,btn);

        buk.append(div);

})

function removebutton(el,index){
    arr2.splice(index,1);

    localStorage.setItem("coffee",JSON.stringify(arr2));

    window.location.reload();
}


function check(){
    window.location.href = "checkout.html"
}