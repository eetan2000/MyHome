import React from 'react'
import "../App.css"

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
    "en-CA": require("date-fns/locale/en-CA")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "",
        allDay: true,
        start: "",
        end: ""
    }
];


export default function CalendarComponent() {
    const [newEvent, setNewEvent] = React.useState({
        title:"",
        start:"",
        end:""
    })

    const [allEvents, setAllEvents] = React.useState(
        localStorage.allEvents ? JSON.parse(localStorage.allEvents) : []
    )

    React.useEffect(() => {
        localStorage.setItem("allEvents", JSON.stringify(allEvents));
    }, [allEvents]);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
        console.log(allEvents)

    }

    return (
        <div className='calendar'>
            <div className='calendar-events'>
                <h2>Add New Event</h2>
                <input type="text" placeholder="Add Title" value={newEvent.title} style={{}} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}/>
                <DatePicker placeholderText='Start Date' style={{}} selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />
                <DatePicker placeholderText='End Date' selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} />
                <button className='calbtn' style={{marginTop:"10px"}} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <div className='calendar-component'>
                <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{height:500, margin:"50px"}} />
            </div>
        </div>
    )
}