import React from 'react';
import './App.css';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from './Pages/Contact';
import Feedback from './Pages/Feedback';
import Fragments from './Pages/Fragments';
import Clipboard from './Pages/Clipboard';
import Keyboard from './Pages/Keyboard';
import Focus from './Pages/Focus';
import WelcomeAdmin from './Pages/WelcomeAdmin';
function App() {
  return (
    <React.Fragment >
        <Home />
        <About />
        <Contact /> 
        <Feedback /> 
        <Fragments /> 
        <Clipboard /> 
        <Keyboard /> 
        <Focus /> 
        <WelcomeAdmin / >
   
    </React.Fragment>
  );
}

export default App;

