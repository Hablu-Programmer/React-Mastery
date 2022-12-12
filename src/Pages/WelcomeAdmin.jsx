import React, { Component } from 'react'
import Fiter from './Fiter';

export default class WelcomeAdmin extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           YourAge: true
        }
      }

  render() {
    let ami

    if(this.state.YourAge){ 
        return ami = "Welcome hablu Programmer"
    }else{
        return  ami = <Fiter />
    }
 
    return (
      <div>{ami}</div>
    )
  }
}
