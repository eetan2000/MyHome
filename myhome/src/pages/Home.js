import React from 'react'
import "../App.css"

export default function Home(props) {
    const date = new Date()
    const hours = date.getHours()
    
    const [timeOfDay, setTimeofDay] = React.useState("")
    const [clockState, setClockState] = React.useState();


    React.useEffect( () => {
        setInterval( () => {
            const clock = new Date()
            setClockState(clock.toLocaleTimeString())
        }, 100 )


        if(hours >= 4 && hours < 12) {
            setTimeofDay("morning")
        } else if(hours >= 12 && hours < 17) {
            setTimeofDay("afternoon")
        } else if(hours >= 17 && hours < 20) {
            setTimeofDay("evening")
        } else {
            setTimeofDay("night")
        }
    }, [] )

    //const name = props.name.split(" ")[0]
    const {displayName} = props.auth.currentUser
    const name = displayName.split(" ")[0]

    return (
        <div className={`home-container-${timeOfDay}`} >
            <h1>{clockState}</h1>
            <h2>Good {timeOfDay}, {name}</h2>
        </div>
    )
}