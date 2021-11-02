import React from 'react';
import Carditems from './carditems';
import './cards.css';
import Classes from './pages/classes';

function Cards() { //First letter has to be capital
    return (
        <div className='Cards'>
            <h1>About us</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                    <Carditems 
                    text="The Coding Foundation aims to bring free, effective and encouraging CS education for all students. To do so, The Coding Foundation offers free mentoring to foster a love in coding technology for kids!"
                    label='Our Mission'
                    path='/learnmore'
                    />
                    <Carditems
                    text="TCF is a nonprofit organization that empowers students from all backgrounds with ambitions in coding. Our mission is to bring FREE, effective & encouraging CS mentoring to the next generation of innovators!"
                    label='Who we are'
                    path='/learnmore'
                    />
                    </ul>
                    <Classes/>
                    </div>
                </div>
            </div>
           
    );
}

export default Cards;//First letter has to be capital
