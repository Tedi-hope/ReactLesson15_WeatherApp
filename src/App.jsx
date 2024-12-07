
function App() {
 
  return (
<div className="maincontainer">
  <div className="location mt-2">
    <div className="container p-5 ">
      <div className="d-flex flex-row justify-content-center ">
           <input type="text" class="rounded-5 text-center text-white" placeholder="Enter Location"/>
      </div>
     </div>
  </div>

  <div className="city ">
    <div className="container  border border-1 p-5 ">
      <div className="d-flex flex-row justify-content-between ">
         <div className="d-flex flex-column justify-content-center">
         <h3 className="text-white ms-2">Addis Ababa</h3>
          <h1 className="text-white text-center">17</h1>
         </div>
          <div>
            <h2 className="text-white">LightRain</h2>
          </div> 
      </div>
     </div>
  </div>

<div className="bottom ">
  <div className="container border border-1 p-5 text-white ">

    <div className="d-flex flex-row justify-content-evenly ">
      <div className="d-flex flex-column me-4">
        <h3 className="text-center">17</h3>
        <h2>Feels Like</h2>
      </div>
     
      <div className="d-flex flex-column me-4">
        <h3 className=" text-center">68</h3>
        <h2>Humidity</h2>
      </div>

      <div className="d-flex flex-column">
        <h4 className="text-center">3.09KPH</h4>
        <h2>Wind Speed</h2>
      </div>

    </div>
           
    </div>
  </div>
     

 </div>
  )
}

export default App
