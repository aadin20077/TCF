import React,{useState,useEffect} from "react";
import "./styles.css"
import moment from 'moment';
import buildCalendar from './build'
import dayStyles from './daytypes'
import Header from "./header" 
import {FaCalendarAlt} from "react-icons/fa"

export default function Calender({value,onChange}){
  const[calendar,setCalendar] = useState([])
  const calender = []

  useEffect(() => {setCalendar(buildCalendar(value));},[value])
  return(
  <div>
    <div className="calendar">
      <Header value={value} setValue={onChange}/>
      <div className="body">
        <div className='day-names'>{['SAT','MON','TUE','WED','THU','FRI','SAT'].map((d)=>(<div className='week'>{d}</div>))}</div>
        {calendar.map((week) =>(
          <div>{week.map((day) =>(<div className ="day" onClick={()=>onChange(day)}> 
            <div className={dayStyles(day,value)}>{day.format("D")}</div> 
          </div>))} 
        </div>))}
      </div> 
    </div>
    <a href='https://tcf.anuj1.repl.co/' class='submit-btn'> <FaCalendarAlt/> Schedule an Event</a>
  </div> 
  )
}