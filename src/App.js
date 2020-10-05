import React,{useEffect,useState} from 'react';
import "./css/style.css";
import HomePage from './pages/_home';
import Aos from 'aos';
import "aos/dist/aos.css";
import Loader from 'react-loader-spinner'


function App() {
  
  useEffect(() => {
    
    setTimeout(() => {
      document.querySelector(".spinner").style.opacity = "0";
      document.querySelector(".spinner").style.visibility="hidden";
    },3000)
    Aos.init({duration:1500})
  },[])
  return (
    <div className="App">
      <div className="spinner">
        <Loader
            type="Puff"
            color="#d4d434"
            height={70}
            width={70}
            timeout={3000} //3 secs
        />
      </div>
      <HomePage />
    </div>
  );
}

export default App;
