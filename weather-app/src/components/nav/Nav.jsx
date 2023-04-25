import { useState } from "react";
// import { getWeather } from "../../App";

//{handleSubmit, handleChange}

function Nav() {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <img
          src="https://freesvg.org/img/1299438956.png"
          alt="LookUp logo"
        ></img>
        <h1>LookUp </h1>
        
      </nav>
    </>
  );
}

export default Nav;
