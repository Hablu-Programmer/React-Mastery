import React, { Component } from 'react'

export default class Input extends Component {
  state = {
    ChannelName:"",
    Subscriber:"", 
    category:"",
    CreationDate:"",
    About:"",
    gender:"",
    checkbox:false,

  }
  
  FormChange = (event)=> {
      this.setState({
        [event.target.name]: event.target.value
      })
  }
  CheckBoxHandler = (event)=> {
    this.setState({
      checkbox: event.target.checked
    })
  }
  render() {
    const {ChannelName,Subscriber,category, CreationDate,About,checkbox} = this.state
    return (
      <div className='container'>
          <input type="text" name='ChannelName' placeholder='Channel Name' className='form-control'  onChange={this.FormChange} value={ChannelName} />
          <input type="text" name='Subscriber' placeholder='Subscriber' className='form-control'  onChange={this.FormChange} value={Subscriber} />

          <select name="category" onChange={this.FormChange} className="form-control" value={category}>
            <option value="Programming">Select</option>
            <option value="Programming">Programming</option>
            <option value="funny">funny</option>
            <option value="educations">educations</option>
            <option value="entertainment">entertainment</option>
          </select>

          <input type="date" name="CreationDate" onChange={this.FormChange} className="form-control" value={CreationDate} />

          <textarea name="About" onChange={this.FormChange} placeholder="Tell Me About Yourself " className='form-control' value={About}>

          </textarea>
          
          <div>
              <input type="radio" value="male" name="gender" onChange={this.FormChange} />
              <label htmlFor="gender">Male</label>
              <input type="radio" value="female" name="gender" onChange={this.FormChange} />
              <label htmlFor="gender">FeMale</label>


          </div>
          <input type="checkbox" name="checkbox" checked={checkbox} onChange={this.CheckBoxHandler} />
          <label htmlFor="checkbox">I Agree & Continue</label>
<br />
          <button className='btn btn-primary' onClick={()=> console.log(this.state)}>
            Submit
          </button>
      </div>
    )
  }
}
