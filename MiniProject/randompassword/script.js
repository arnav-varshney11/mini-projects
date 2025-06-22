const buttonaccess=document.getElementById("butt");
const inputaccess=document.getElementById("pass");
const copiedicon=document.getElementById("copyicon");

// itni hi length honi chahiye
const length=10;

// change hoga let banao isiliye
// let string=""  isko ander dalo nhi toh add up hpta jyega next click pe

const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const special="!@#$%^&*(-)=+_[]{\|}";
const any=uppercase+lowercase+special+number;
buttonaccess.addEventListener("click",(event)=>{
       let string="";   
       string=string+ uppercase[Math.floor(Math.random()*uppercase.length)];
       string=string+ lowercase[Math.floor(Math.random()*lowercase.length)];
       string=string+ number[Math.floor(Math.random()*number.length)];
       string=string+ special[Math.floor(Math.random()*special.length)];
       while(string.length<length){
        string=string+ any[Math.floor(Math.random()*any.length)];
       }
       inputaccess.value=string;
})


copiedicon.addEventListener("click",()=>{
    inputaccess.select();
    document.execCommand("copy");
 })