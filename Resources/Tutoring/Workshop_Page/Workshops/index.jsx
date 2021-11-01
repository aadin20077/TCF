import React,{useState,useEffect} from 'react'
import getData from './Data'
import moment from 'moment'
import "./styles.css"

export default function Workshop({value}){
  
  
  const [data,setData] = useState(getData(value.format('l')))
  useEffect(()=>{setData(getData(value.format('l')));},[value])
  
  return(
    <div className="container">
      <div className='header'> Schedule </div>
        <div className='body'>{data.map((info)=>  
          (<div className='frame'>
            <div className='topline'>
            <div className='title'>{info.title}
            </div>
            <a href='https://tcf.anuj1.repl.co/' class='record-btn'> View Recording</a>
            </div>
            <div className='time'>{info.time}</div>
            <div className='text'>{info.text}</div>
        </div>))}
      </div>
    </div>
  )
}