import React from 'react'
import "../App.css"

export default function Home() {
    const date = new Date()
    const hours = date.getHours()
    
    const [timeOfDay, setTimeofDay] = React.useState("")

    React.useEffect( () => {
        if(hours >= 4 && hours < 12) {
            setTimeofDay("Good morning")
        } else if(hours >= 12 && hours < 17) {
            setTimeofDay("Good afternoon")
        } else if(hours >= 17 && hours < 20) {
            setTimeofDay("Good evening")
        } else {
            setTimeofDay("Good night")
        }
    } )

    return (
        <div>
            <h2>{timeOfDay}</h2>
        </div>
    )
}