import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
 import Nav from "./components/nav/Nav";


function App() {

  //Setting coords with geoLocation
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation not available on your browser, try search instead!')
    }else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        console.log(position);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  useEffect(() => {
    getLocation()
  }, [])


  //Menu for showing one day forecast hour-by-hour
  const [menu, setMenu] = useState(false);
  const handleMenuShow = () => {
  setMenu(!menu);
  }

  const getWeather = async () => {
  const toArray = [];

  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=38de3cc8678599c25ca4c9800d971a8b`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result)


  }catch(error) {
     console.log(error);
     }
  }

  
   useEffect(() => {
     getWeather()
   }, [])


  return (
    //handleSubmit={handleSubmit} handleChange={handleChange} on Nav-component?
    <>
     <Nav /> 
    <div className="App">
     <div  className="container text-center">
  <div className="row justify-content-md-center">
    <div id="grid" className="cont col col-md-6 shadow p-3 mb-5 bg-body-tertiary rounded">
    
      Weather in your city today
      - Farenheit or Celsius
      -temp
      -wind 
      -humidity
    </div>
    
    <div id="grid" className="cont  col col-lg-4 shadow p-3 mb-5 bg-body-tertiary rounded">
      Sun up and down
      - up kl:
      - down kl:
    </div>
  </div>
</div>

{menu && (
  <div>
    <div onClick={handleMenuShow}></div>
    <div className="modalStyle" id="overlay ">
    <div className="xmark"> <FontAwesomeIcon icon={faXmark} style={{cursor: "pointer"}} size="3x" onClick={handleMenuShow}/></div>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col"> </th>
      <th scope="col">Temp</th>
      <th scope="col">wind</th>
      <th scope="col">humidity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">kl.</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">kl.</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">kl. </th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
    </div>
  )} 
<div  className="container text-center">
  <div className=" row justify-content-md-center">
    <div id="grid" className="cont  col col-sm-10 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      5-day-prognosis
      <div className="d-flex justify-content-center p-2">
        <div className="p-2">
           <div className="card " onClick={handleMenuShow}>   
            <div className="card-body">
               <p>temp</p><br></br>
               <p>wind</p><br></br>
               <p>humidity</p><br></br>
            </div>
          </div>
        </div>

        <div className="p-2">
           <div className="card" onClick={handleMenuShow}>
            <div className="card-body" >
            <p>temp</p><br></br>
               <p>wind</p><br></br>
               <p>humidity</p><br></br>
            </div>
          </div>
        </div>
        <div className="p-2">
           <div className="card" onClick={handleMenuShow}>
            <div className="card-body">
            <p>temp</p><br></br>
               <p>wind</p><br></br>
               <p>humidity</p><br></br>
            </div>
          </div>
        </div>
        <div className="p-2">
           <div className="card" onClick={handleMenuShow}>
            <div className="card-body">
            <p>temp</p><br></br>
               <p>wind</p><br></br>
               <p>humidity</p><br></br>
            </div>
          </div>
        </div>
        <div className="p-2">
           <div className="card" onClick={handleMenuShow}>
            <div className="card-body">
            <p>temp</p><br></br>
               <p>wind</p><br></br>
               <p>humidity</p><br></br>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
</div>
</div>

 

    </>
   
  )
  
}

export default App