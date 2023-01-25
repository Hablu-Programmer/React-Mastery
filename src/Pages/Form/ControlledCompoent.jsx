import React from 'react'

function ControlledCompoent() {
    function Submit(){ 
        
    }
  return (
    <div className='container'> 
    <br />
        <input type="text" placeholder='Uncontrolled Form' value="" onChange={Submit} />
    </div>
  )
}

export default ControlledCompoent