import React from 'react'
const name = "eshan"; 

const Obj = { 
    name:"Eshan", 
    Class:12, 
    Prof:"programmer"
}
function Expressions() {
  return (
    <div>
        <h1>This is JSX Expressions {Obj.Prof + " " + Obj.Roll}  </h1>

        <h2>{`My Name Is ${name}, & I Am Professional ${Obj.Prof}, & I read In  ${Obj.Class}` }  </h2> 
    </div>
  )
}

export default Expressions