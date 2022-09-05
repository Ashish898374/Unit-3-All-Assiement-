let data=JSON.parse(localStorage.getItem("products")) ||[];
  console.log(data)
 function topa(a,b,c,d,e,f){
    this.name=a;
    this.catogery=b;
    this.image=c;
    this.price=d;
    this.gender=e;
    this.boolean=f;
 }


    function fun(e){
        e.preventDefault();
        let from=document.getElementById("from");
        let name=from.name.value;
        let catogery=from.catogery.value;
        let image=from.image.value;
        let price=from.price.value;
        let gender=from.gender.value;
        let boolean=from.boolean.value;

        let total= new topa(name,catogery,image,price,gender,boolean)
        console.log(total)
        data.push(total)
        localStorage.setItem("products",JSON.stringify(data))
    }
    document.getElementById("ola").addEventListener("click",function(){
        window.location.href="addmin.html";
    })