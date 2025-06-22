const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");



// console.log(current.toLocaleTimeString());
// console.log(current.getHours())
function timer(){
    const current=new Date();
hours.textContent=(current.getHours()<10?"0":"")+ current.getHours();
minutes.textContent=current.getMinutes();
seconds.textContent=current.getSeconds();
}
setInterval(timer, 1000);