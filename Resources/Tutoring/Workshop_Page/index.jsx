import React,{useState} from 'react';
import './index.css'
import moment from 'moment';
import Calendar from './Calendar';
import Workshop from './Workshops';
import WshpImage from './Assets/tcfimage.png';



export default function Page(){
  const [value,setValue] = useState(moment())
  return (
    <div>
      <div className='top'>
        <div className='header'>
          <h1> Workshops </h1>
          <p> The Coding Foundation's team of<br/>dedicated volunteers offers free virtual<br/> coding workshops for you!<br/><br/> Workshops made just for you! </p>
        </div>
          <img src={WshpImage} alt='WshpImage' width='1200' height='500'/>
      </div>
      <div className='middle'>
        <Calendar value={value} onChange={setValue}/>
        <Workshop value={value}/>
      </div>
    </div>
  );
}