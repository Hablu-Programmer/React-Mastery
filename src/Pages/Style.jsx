import React from 'react'
import  "./Style.css"
function Style() {
    const ElementOne = {
        color:"White",
        backgroundColor:"green",
        textAlign:"center"
    };
  return (
    <div>
        <h1 style={ElementOne}>my first style component</h1>
        <h2 className='hablu'>welcome to hablu programmer</h2>
        <p>this p tag 2</p>
    </div>
  )
}

export default Style