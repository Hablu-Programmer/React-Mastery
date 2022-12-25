import React, { Component } from 'react'
import Fiter from './Fiter';

class WelcomeAdmin extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       YourAge:false, 
    }
  }

  render() {
    let ami
    if(this.state.YourAge){
      ami = <h1>Welcome Hablu Programmer</h1>; 
    }else{
      ami = <Fiter /> 
    }
    return (
      <div>{ami}</div>
    )
  }
}
export default WelcomeAdmin;  