import React from 'react';
import './App.css';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from './Pages/Contact';
import Feedback from './Pages/Feedback';
import Fragments from './Pages/Fragments';

function App() {
  return (
    <React.Fragment>
        <Home />
        <About />
        <Contact /> 
        <Feedback /> 
        <Fragments /> 
    </React.Fragment>
  );
}

export default App;

