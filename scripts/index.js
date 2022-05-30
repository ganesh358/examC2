// Add the coffee to local storage with key "coffee"



async function getitems(){

    try{
        const res = await fetch(`https://masai-mock-api.herokuapp.com/coffee/menu`);

        const data = await res.json();

        const data1 = data.menu;

        const data2 = data1.data;
        appendData(data2)
        console.log(data2)
    }
    catch(err){
        console.log(err)
    }
}
getitems();

var arr = JSON.parse(localStorage.getItem("coffee")) || [];

var count = arr.length;

document.querySelector("#coffee_count").innerText = count;

var maindiv = document.getElementById("menu");

function appendData(data){

    data.forEach(function(el){

        var div = document.createElement("div");

        var img = document.createElement("img");
        img.src = el.image;
        
        var name = document.createElement("p");
        name.innerText = el.title;

        var price = document.createElement("p");
        price.innerText = el.price;

        var btn = document.createElement("button");
        btn.innerText = "Add to bucket ";
        btn.setAttribute("id","add_to_bucket")
        btn.addEventListener("click",function(){
            addbutton(el);
        })
        div.append(img,name,price,btn);

        maindiv.append(div);

    })
}


function addbutton(el){
   
    arr.push(el);
   console.log(arr);

   localStorage.setItem("coffee",JSON.stringify(arr));
   window.location.reload();
}