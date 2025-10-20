import { ktrasoduong } from "../helpers/ktrasoduong.js";

const ktrasochan =(number)=>{
    if(number%2==0) console.log("day la so chan");
    else console.log("day la so le");
}

const tinhtong=(a,b,callback)=>{
    const kq =a+b;
    callback(kq);
}

tinhtong(10,20,(number)=>{
    ktrasochan(number);
    ktrasoduong(number);
});

fetch("https://dummyjson.com/product")
.then(res=> res.json())
.then(data => {
    const arr = data.product.map(item=>{
        return `<li>${item.title}</li>`;
    });


});

const fetchAPI =async (api)=>{
    const res= await fetch(api); 
    const data = await res.json();
    return data;
}

fetchAPI("https://dummyjson.com/product");