// code cas mobile navbar shown :
const bar=document.getElementById("bar")
const nav=document.getElementById("navbar")
const ferme=document.getElementById("close")
if(bar){bar.addEventListener('click',()=>{nav.classList.add("active-nav");});}
if(ferme){ferme.addEventListener('click',()=>{nav.classList.remove("active-nav");});}

// code imgs slider in product details 
const mainImg=document.getElementById("MainImg");
const imgList=document.querySelectorAll("#pro-details img.small-img");
imgList.forEach((item)=>{
    item.addEventListener('click',()=>{
        mainImg.src=item.src;
    })
});

