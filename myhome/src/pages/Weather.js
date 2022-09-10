import React from 'react'
import axios from 'axios'
import "../App.css"

export default function Weather() {
    const [data, setData] = React.useState({})
    const [location, setLocation] = React.useState("")
    const [weatherimg, setWeatherImg] = React.useState()


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=088506b97dcde5453a13537bac5caed0`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
            })
        }
    }

    function celcius(temp) {
        return Math.round(temp - 273.15)
    }

    function weatherImg() {
        let img = "";
        if(data.main) {
            if(celcius(data.main.temp) >= 15) {
                img = " sunny"
            }
            else if (celcius(data.main.temp) < 15 && celcius(data.main.temp) >= 10) {
                img = " cloudy"

            }
            else {
                img = " rainy"
            }
        }
        return img
    }

    return (
        <div className={`weather`}>
            <div className='search'>
                <input 
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder="Enter Location"
                type="text"/>
            </div>
            <div className='weather-container'>
                <div className='top'>
                    <div className='location'>
                        <p>{data.name}</p>
                    </div>
                    <div className='temp'>
                        {data.main ? <h1>{celcius(data.main.temp)}°C</h1> : null}
                    </div>
                    <div className='description'>
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>

                {data.name != undefined &&  
                <div className='bottom'>
                    <div className='feels'>
                        {data.main ? <p>{celcius(data.main.feels_like)}°C</p> : null}
                        <p>Feels Like</p>
                    </div>
                    <div className='humidity'>
                        {data.main ? <p>{data.main.humidity} %</p> : null}
                        <p>Humidity</p>
                    </div>
                    <div className='wind'>
                        {data.wind ? <p>{Math.round(data.wind.speed)} KM/H</p> : null}
                        <p>Wind Speed</p>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}