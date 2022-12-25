import React from 'react'

function Style() {
    const ElementOne = {
        color:"red",
        backgroundColor:"green",
        textAlign:"center"
    };
  return (
    <div>
        <h1 style={ElementOne}>my first style component</h1>
    </div>
  )
}

export default Style