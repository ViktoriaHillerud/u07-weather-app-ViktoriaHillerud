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
        <div className="searchBar">
          <form onSubmit={handleSubmit} className="form-inline">
            <input
              className="input"
              onChange={handleChange}
              type="search"
              placeholder="Search city"
              aria-label="Search"
            />
            <button className="btn-grad" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Nav;
