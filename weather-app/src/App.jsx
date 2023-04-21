import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faSun,
  faMoon,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import Nav from "./components/nav/Nav";



function App() {

  // const getWeather = async (city)  => {
  //   const searchUrl1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=38de3cc8678599c25ca4c9800d971a8b`;
  //   const searchUrl2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=38de3cc8678599c25ca4c9800d971a8b`;
  //   const responses = await Promise.all([
  //     fetch(searchUrl1),
  //     fetch(searchUrl2),
      
  //   ])
  
  //     .then((res) => Promise.all(res.map((r) => r.json())))
  //     .then((result) => {
  //       console.log(result);
  //       setWeather(result[0]);
  //       console.log(result[0]);
  //       setForecast(result[1].list);
  //       console.log(result[1].list);
  //     });
  // }

  //Setting coords with geoLocation
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState(undefined);
  const [celcius, setCelcius] = useState(true);

  //Menu for showing one day forecast hour-by-hour
  const [menu, setMenu] = useState(false);
  const handleMenuShow = () => {
    setMenu(!menu);
  };

  

  useEffect(() => {

    const getLocation = async () => {
      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=38de3cc8678599c25ca4c9800d971a8b`;
      const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=38de3cc8678599c25ca4c9800d971a8b`;

      if (!navigator.geolocation) {
        setStatus("We couldnt find your position!");
      } else {
        setStatus("");
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          console.log(position);
        },
        () => {
          setStatus(
            "Unable to retrieve position. Try search for your city instead!"
          );
        }
      );

      const responses = await Promise.all([
        fetch(urlWeather),
        fetch(urlForecast),
      ])

        .then((res) => Promise.all(res.map((r) => r.json())))
        .then((result) => {
          console.log(result);
          setWeather(result[0]);
          console.log(result[0]);
          setForecast(result[1].list);
          console.log(result[1].list);
        });
    };
    getLocation();
  }, [lat, lng]);


 
  const changeUnit = () => {
    setCelcius(!celcius);
  };

  return (
    //handleSubmit={handleSubmit} handleChange={handleChange} on Nav-component?
    <>
      <Nav />

      <div className="App">
        <div className="container text-center">
          <div className="dailyholder row justify-content-md-center">
            <div
              id="grid"
              className="cont col col-md-6 shadow p-3 mb-5 bg-body-tertiary rounded"
            >
              {status}
              {typeof weather.main != "undefined" ? (
                <div>
                  <h2>{weather.name}</h2>
                  <button onClick={changeUnit} className="setDegree">
                    Change degree
                  </button>
                  {!celcius && <p className="degrees"><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/>{Math.round(weather.main.temp)} &#176;K</p>}<br></br>
                  {celcius && (
                    <p className="degrees"><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/>{Math.round(weather.main.temp - 273.15)} &#176;C</p>
                  )}
                  <p>{weather.weather[0].description}</p>
                  <p>
                    <div>
                      <FontAwesomeIcon icon={faWind} size="2xl" />
                    </div>
                    {weather.wind.speed} m/s
                  </p>
                  Humidity
                  <p>{weather.wind.speed}%</p>
                  
                </div>
              ) : (
                ""
              )}
            </div>

            <div
              id="grid"
              className="cont col col-lg-4 shadow p-3 mb-5 bg-body-tertiary rounded d-flex justify-content-center"
            >
              {typeof weather.main != "undefined" ? (
                <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                  <div>
                    <div>
                      <FontAwesomeIcon icon={faSun} size="3x" />
                    </div>
                    <div>
                      <h4>Sunrise</h4>
                      {new Date(weather.sys.sunrise * 1000).toLocaleTimeString(
                        "en-IN"
                      )}
                    </div>
                  </div>

                  <div>
                    <div>
                      <FontAwesomeIcon icon={faMoon} size="3x" />
                    </div>
                    <div>
                      <h4>Sunset</h4>
                      {new Date(weather.sys.sunset * 1000).toLocaleTimeString(
                        "en-IN"
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        {/* Forecast 5 days */}

        {menu && (
          <div>
            <div onClick={handleMenuShow}></div>
            <div className="modalStyle" id="overlay ">
              <div className="xmark">
                {" "}
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ cursor: "pointer" }}
                  size="3x"
                  onClick={handleMenuShow}
                />
              </div>
              {forecast && (
                <div className="d-flex justify-content-center p-2">
                  {forecast
                    .filter((fc) => fc.dt_txt.slice(0, 11))
                    .map((data) => {
                      return (
                        <div className="p-2">
                          <table>
                            <thead>
                            <tr>
                              <th>{data.dt_txt}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td>
                                {" "}
                                {!celcius && (
                                  <p className="degrees">{Math.round(weather.main.temp)} &#176;K</p>
                                )}
                                {celcius && (
                                  <p className="degrees">
                                    {Math.round(weather.main.temp - 273.15)}
                                    &#176;C
                                  </p>
                                )}
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="container text-center">
          <div className=" row justify-content-md-center">
            <div
              id="grid"
              className="cont  col col-sm-10 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
            >
              5-day-prognosis
              {forecast && (
                <div className="d-flex justify-content-center p-2">
                  {forecast
                    .filter((fc) => fc.dt_txt.slice(11, 19) === "09:00:00")
                    .map((data) => {
                      return (
                        <div className="p-2">
                          <div className="card " onClick={handleMenuShow}>
                            <div className="card-body">
                              <p>{data.dt_txt.slice(0,10)}</p>
                              {!celcius && (
                                <p className="degrees">{Math.round(data.main.temp)}&deg;K</p>
                              )}
                              {celcius && (
                                <p className="degrees">
                                  {Math.round(data.main.temp - 273.15)}&deg;C
                                </p>
                              )}
                              <p>Humidity {data.main.humidity}%</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
