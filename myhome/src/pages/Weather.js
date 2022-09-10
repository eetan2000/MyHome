import React from 'react'
import axios from 'axios'
import "../App.css"

export default function Weather() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=088506b97dcde5453a13537bac5caed0'

    return (
        <div className='weather-container'>
            <div className='top'>
                <div className='location'>
                    <p>Vancouver</p>
                </div>
                <div className='temp'>
                    <h1>°C</h1>
                </div>
                <div className='description'>
                    <p>Cloudy</p>
                </div>
            </div>
            <div className='bottom'>
                <div className='feels'>
                    <p>°C</p>
                </div>
                <div className='humidity'>
                    <p>%</p>
                </div>
                <div className='wind'>
                    KM/H
                </div>
            </div>
        </div>
    )
}