document.querySelector("button").addEventListener("click",()=>{
    const palace=document.getElementById("cityName").value;

  function updatetemp(data){
    const element2=document.getElementById("description");
    element2.src=`${data.current.condition.icon}`;

    const element=document.getElementById("temperature");
    element.innerHTML=`Todays Temperature: ${data.current.temp_c}`;

    const element3=document.getElementById("location");
    element3.innerHTML=`${data.location.region}`;
  }


  const promises=fetch(`http://api.weatherapi.com/v1/current.json?key=2a9717d97c8c44688a9205525252501&q=${palace}&aqi=yes`)
   promises
   .then((response)=>{
    return response.json();
   })
   .then((data)=>{
           updatetemp(data);
   })
   .catch((error)=>{
    console.error("ERROR FETCHING DATA:",error);
   })
})