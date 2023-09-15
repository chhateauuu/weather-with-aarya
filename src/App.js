import React, {useState} from 'react' 
import axios from 'axios'

function App() {

  const[data,setData] = useState({})
  const[location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=86e8e1e51ce45968509f82fc4daac122`
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
    <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter City'
          type="text" />
      </div>      
      <div className="container">
        <div className= "top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined &&
        <div className="bottom">
            <div className="feels">
             
            <p className="bold"><i className="fas fa-thermometer-half"></i></p>
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
        </div>
        <div className="humidity">
             
            <p className="bold"><i className="fas fa-tint"></i></p>
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
        </div>
        <div className="wind">
            
            <p className="bold"><i className="fas fa-wind"></i></p>
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
        </div>
      </div>
}
      </div>
    </div>
  );
}

export default App;
