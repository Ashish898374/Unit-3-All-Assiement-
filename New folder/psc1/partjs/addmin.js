let arr=JSON.parse(localStorage.getItem("products"))
    awesom(arr)
    function awesom(arr){
        let count=0;
        arr.forEach(function(el,index){
            count++
            let div=document.createElement("div");

            let img=document.createElement("img");
            img.src=el.image;
            img.style.width="300"
            img.style.height="300"
            let name=document.createElement("p")
            name.innerText=el.name;
            name.style.marginLeft="70"
            let price=document.createElement("p");
            price.innerText=el.price;
            price.style.marginLeft="100"
            // price.style.textAlign="center"
            let catogery=document.createElement("p");
            catogery.innerText=el.catogery;
            catogery.style.marginLeft="100"
            // catogery.style.textAlign="center"
            let gender=document.createElement("p");
            gender.innerText=el.gender
            gender.style.marginLeft="100"
            // gender.style.textAlign="center"
            let boolean=document.createElement("p");
            boolean.innerText=el.boolean
            boolean.style.marginLeft="100"
            // boolean.style.textAlign="center"
            let btn=document.createElement("button")
            btn.innerText="remove"
            btn.style.marginLeft="60"
            btn.style.fontSize="20"
            btn.addEventListener("click",function(){
                remove(el,index)
            })
                let btn1=document.createElement("button");
                btn1.innerText="sold"
                btn1.style.marginLeft="60"
                 btn1.style.fontSize="20"
                btn1.addEventListener("click",function(){
                    if(boolean.innerHTML=="false"){
                        boolean.innerHTML="true"
                        btn1.style.background="red"
                    }
                    else if(boolean.innerHTML=="true"){
                        boolean.innerHTML="false"
                        btn1.style.background="green"
                    }
                })
                document.getElementById("count").innerText="total product"+":- "+count
                div.append(img,name,price,catogery,gender,boolean,btn,btn1)
                document.querySelector("#container").append(div)
                console.log(arr)
            });
      
    };
    function remove(el,index){
        arr.splice(index,1)
        localStorage.setItem("products",JSON.stringify(arr))
        window.location.reload();
    }

    document.getElementById("koi").addEventListener("click",function(){
        window.location.href="index.html"
    })