const buttonaccess=document.querySelectorAll("button");
const inputaccess=document.querySelector("#input");
// gives html collection
let string="";

Array.from(buttonaccess).forEach((button)=>{
    button.addEventListener("click",(event)=>{
         if(event.target.textContent=="="){
            string=eval(string);
            inputaccess.value=string;
         }
         else if(event.target.textContent=="AC"){
            string="";
            inputaccess.value=string; 
         }
         else if(event.target.textContent=="DEL"){
              string=string.slice(0,string.length-1);
            inputaccess.value=string;
         }
         else{
            string=string+event.target.textContent;
            inputaccess.value=string;
         }
     })
})
