import React from 'react'
import '../../App.css'
import Herosection from '../herosection';
import Cards from '../cards';

function Home() {
    return(
       <>
       {/* <Navbar />
       <Sidebar />
       <Submenu /> */}
       <Herosection />
       <Cards />
       </>
    );
}

export default Home;// You are exporting Home, so you have to import Home, not "home"