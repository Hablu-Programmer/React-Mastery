import React from 'react'
import  "./Style.css"
import HabluStyles from "./hablu.module.css";

function Style() {
    const ElementOne = {
        color:"White",
        backgroundColor:"green",
        textAlign:"center"
    };
  return (
    <div>
        <h1 style={ElementOne}>my first style component</h1>
        <h2 className='Error'>welcome to hablu programmer</h2>
        <h2 className='Error'>welcome to hablu programmer</h2>
        <h2 className='Error'>welcome to hablu programmer</h2>
        <h2 className={HabluStyles.Error}>welcome to hablu programmer</h2>
        <button className={HabluStyles.eshan}>Click Me</button>
    </div>
  )
}

export default Style