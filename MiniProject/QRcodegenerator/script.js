const button=document.querySelector("button");
const qrimage=document.getElementById("qrimage");
const qrtext=document.querySelector("input");
const imagebox=document.getElementById("imgbox");
const QRAPI="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";


button.addEventListener("click",()=>{
    if(qrtext.value.length>0){
       qrimage.src=QRAPI+qrtext.value;
       imagebox.classList.add("show-img");
   }
})
