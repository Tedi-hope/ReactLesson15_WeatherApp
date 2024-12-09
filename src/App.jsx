import { useState } from "react";


function App() {
  const [location, setLocation]=useState("");
  const [data, setData]=useState(null);
  const [load, setLoad]=useState(false);
  const [error, setError]=useState("");
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=5eaa272a2eddc5dfb73fa12b92057e3a`;

  const searchLocation=async()=>{
   setLoad(true);
   setError("");

   if(!location){
    setError("Please enter a location");
    setLoad(false);
    return;
   }

   try{
    const response=await fetch(url);

    if(!response.ok){
      throw new Error("Failed to fetch weather data.Check the city name.");
    }

    const weatherData=await response.json();
    setData(weatherData);
   }

   catch(err){
    setError(err.message);
   }

   finally{
    setLoad(false);
   }

  };

  const handleKeyDown=(e)=>{
    if(e.key==="Enter"){
      searchLocation();
    }
  };

 
 
  return (
<div className="maincontainer">
  <div className="location mt-2">
    <div className="container p-5 ">
      <div className="d-flex flex-row justify-content-center ">
           <input type="text" class="rounded-5 text-center" placeholder="Enter Location"
           onChange={(e)=>setLocation(e.target.value)}
           onKeyDown={(e)=>handleKeyDown(e)}/>
      </div>
      {error && <p className="text-danger text-center mt-3">{error}</p>}
     </div>
  </div>

 {data && (
  <>

  <div className="city">
    <div className="container p-5 ">
      <div className="d-flex flex-row justify-content-between ">
        <div className="d-flex flex-column justify-content-center">
           <h3 className="text-white ms-2">
           {data.name}</h3>
           <h1 className="text-white text-center">
            {Math.round(data.main.temp)}&nbsp;<sup>o</sup>C</h1>
         </div>
        <div className="d-flex flex-column">
            <h2 className="text-white">
              {data.weather[0].main}</h2>
        </div> 
      </div>
    </div>
  </div>

  </>
 )} 
<div className="bottom ">
  <div className="container p-5 text-white ">
  
  <div className="allbottomparts">
    <div className="d-flex flex-row justify-content-evenly">
      <div className="d-flex flex-column me-4">
        <h3 className="text-center">
          {data ? Math.round(data.main.feels_like):""}</h3>
        <h2>Feels Like</h2>
      </div>
     
      <div className="d-flex flex-column me-4">
        <h3 className=" text-center">
        {data ? data.main.humidity + "%" :""}</h3>
        <h2>Humidity</h2>
      </div>

      <div className="d-flex flex-column">
        <h4 className="text-center">
        {data ? Math.round(data.wind.speed) + "KPH" :""} </h4>
        <h2>Wind Speed</h2>
      </div>

    </div>
  </div>
    </div>
  </div>
 

 </div>
  );
}

export default App
