import { useState } from "react";
import { Link } from "react-router-dom";

//{handleSubmit, handleChange}

function Nav() {

    const [city, setCity] = useState("")
    const [cityWeather, setCityWeather] = useState([])

    //Nedanstående kod används för närarande i App.jsx...
    
    // const getWeather = async () => {
    //     const toArray = [];
    
    //     try {
    //       const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';
    //       const response = await fetch(url);
    //       const result = await response.json();
    //       console.log(result)
    
    //     } catch(error) {
    //       console.log(error);
    //     }
    //   }
    
    //   useEffect(() => {
    //     getWeather()
    //   }, [])


    const handleChange = (e) => {
        setCity(e.target.value.toLowerCase());
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        getWeather();
      }

return (
    <>
    <nav className="navbar navbar-light bg-light justify-content-around">
        <Link>Hello</Link>
        <div className="searchBar">
        <form onSubmit={handleSubmit} className="form-inline" >
    <input className="input" onChange={handleChange} type="search" placeholder="Search city" aria-label="Search"/>
    <button className ="btn btn-outline-success inline" type="submit">Search</button>
  </form>
  </div>
    </nav>
    </>
)
}

export default Nav