import comp from "../components/navbar.js";
console.log(navbar)
  document.getElementById("navbar").innerHTML=comp();
  import { getdata,append } from "./gech.js";
console.log(getdata)

  const url=`https://fakestoreapi.com/products/category/jewelery`;
  let container=document.getElementById("container");
   getdata(url).then((res)=>{
    console.log(res);  
    append(res,container);
   });
   