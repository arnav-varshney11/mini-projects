const dateaccess=document.getElementById("date");
const dayaccess=document.getElementById("day");
const monthaccess=document.getElementById("month");
const yearaccess=document.getElementById("year");


const present=new Date();
// console.log(present);


 const weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 const  months=["January","February","March","April","May","June","July","August","September","October","November","December"];
 dateaccess.innerHTML=(present.getDate()<10?"0":"")+ present.getDate();
 dayaccess.innerHTML=weekdays[present.getDay()];
 monthaccess.innerHTML=months[present.getMonth()];
 yearaccess.innerHTML=present.getFullYear();