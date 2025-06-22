document.body.addEventListener("click",(event)=>{
   const circle= document.createElement("div");
   circle.className="circle";
   circle.textContent="HI";
   

   const color=["red","pink","green","white","blue","orange"];
   circle.style.backgroundColor=color[Math.floor(Math.random()*color.length)];

   document.body.appendChild(circle);
 
   const posx=event.clientX;
   const posy=event.clientY;

   circle.style.left=`${posx-25}px`;
   circle.style.top=`${posy-25}px`;

   setTimeout(() => {
    circle.remove();
   }, 5000);
})