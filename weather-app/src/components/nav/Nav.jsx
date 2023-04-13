import { Link } from "react-router-dom"


function Nav() {

    const handleChange = (e) => {
        setCity(e.target.value.toLowerCase());
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        getCity();
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