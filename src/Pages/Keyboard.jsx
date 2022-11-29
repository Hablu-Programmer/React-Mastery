import React from 'react'

function Keyboard() {
    const OnKeyDownText = ()=>{
        console.log("key Down")
    }
    const OnKeyUpText = ()=>{
        console.log("key Up")
    }

    const OnKeyPressText = ()=>{
        console.log("key pressed")
    }
  return (
    <div>
      <h1>Keyboard Event</h1>
      <input type="text" onKeyDown={OnKeyDownText} />
      <input type="text" onKeyUp={OnKeyUpText} />
      <input type="text" onKeyPress={OnKeyPressText} />

    </div>
  )
}

export default Keyboard