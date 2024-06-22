import React from 'react';
import './App.css';
import BackgroundSlideshow from './components/BackgroundSlideshow/BackgroundSlideshow';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar />
     
    <BackgroundSlideshow />
    <BackgroundSlideshow />
    </div>
  );
}

export default App;
