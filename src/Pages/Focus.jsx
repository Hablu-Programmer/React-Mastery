import React from 'react'

function Focus() {
    const FocusText = ()=> {
        console.log("You Have Focus on Input")
    }
    const BlurText = ()=> {
        console.log("You Have Blur on Input")
    }
  return (
    <div> <br /><br />
        <h1>focus event</h1>

        <input type="text" onFocus={FocusText} />
        <input type="text" onBlur={BlurText}/>
    </div>
  )
}

export default Focus