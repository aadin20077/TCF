import './App.css';
import Aboutus from "./Aboutus.png";
import CodingFoundation from './CodingFoundation.png'

function App() {
  return (
    <div>
      <header className="App-header">
<div>
        <ul>
        <a href="url">Home </a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <a href="url">About us</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="url">Resources</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="url">Suggestions</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="url">Opportunities</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ul>
        <br>
        </br>
</div>

        <img src={CodingFoundation} />

        <h1 id='big'>
          About Us
        </h1>

        <p>
          The Coding Foundation aims to bring free, effective, and
          encouraging computer science education for all student in different
          backgrounds. The Coding Foundation offers free mentoring to foster
          a love in coding technology for kids. We also offer free resources
          for students to explore the field of STEM and get a head start on their
          ambitions. Through fun and engaging activities, the Coding Foundation ensures
          students become inspired to work with technology in the future.
        </p>

        <img src={Aboutus} class="left"/> 
        <button> Get Started </button> 
        <button> Create Account </button>
      </header>
    </div>
  );
}

export default App;
