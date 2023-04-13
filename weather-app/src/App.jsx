import { useEffect } from "react";
import Nav from "./components/nav/Nav";


function Today() {
  
  return (
    <>
    <div  className="container text-center">
  <div className="row justify-content-md-center">
    <div id="grid" className="col col-md-6 shadow p-3 mb-5 bg-body-tertiary rounded">
      Weather in your city today
      -temp
      -wind 
      -humidity
    </div>
    
    <div id="grid" className="col col-lg-4 shadow p-3 mb-5 bg-body-tertiary rounded">
      Sun up and down
      - up kl:
      - down kl:
    </div>
  </div>
</div>


<div  className="container text-center">
  <div className="row justify-content-md-center">
    <div id="grid" className="col col-sm-12 shadow p-3 mb-5 bg-body-tertiary rounded">
      5-day-prognosis
      <div className="d-flex justify-content-center p-2">
        <div className="p-2">
           <div className="card">   
            <div className="card-body">
               This is some text within a card body.
            </div>
          </div>
        </div>

        <div className="p-2">
           <div className="card">
            <div className="card-body">
               This is some text within a card body.
            </div>
          </div>
        </div>
        <div className="p-2">
           <div className="card">
            <div className="card-body">
               This is some text within a card body.
            </div>
          </div>
        </div>
        <div className="p-2">
           <div className="card">
            <div className="card-body">
               This is some text within a card body.
            </div>
          </div>
        </div>
        <div className="p-2">
           <div className="card">
            <div className="card-body">
               This is some text within a card body.
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



function App() {

  const getWeather = async () => {
    const toArray = [];

    try {
      const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';
      const response = await fetch(url);
      const result = await response.json();
      console.log(result)

    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <>
     <Nav/>

     <Today></Today>
    </>
   
  )
  
}

export default App