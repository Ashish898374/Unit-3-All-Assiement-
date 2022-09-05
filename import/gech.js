let getdata=async(url)=>{
    let res=await fetch(url);
    let data=await res.json();
    // console.log(data); 
    data=data.sort((a,b)=>{
        return a.price-b.price;
    })
    return data;  
  }

  let append=(data,container)=>{
    data.forEach(({image,title,price}) =>{
          let img=document.createElement("img");
          img.style.width="200px"
          img.style.height="200px";
      
          img.src=image;
          let t=document.createElement("p");
          t.innerText=title;
          let prices=document.createElement("h3");
          prices.innerText=price;
          let div=document.createElement("div");
          div.append(img,t,prices)
          container.append(div)
         
          })
  }
  export  {getdata,append}