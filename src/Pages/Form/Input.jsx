// step 1 create one class component 
// step 2 crete state 
 

import React, { Component } from 'react'

 class Input extends Component {
//2 
state = {
    ChannelName:"",
    Subscribe:"",
    Category:"",
    CreationDate:"",
    About:"",
    gender:"",
    CheckBox:false,
}
FormChange  = (event) =>{
    // console.log(event.target.name); //step1
    this.setState({
        [event.target.name]: event.target.value
    })
}

CheckBoxHandle = (event)=>{
    this.setState({
        CheckBox: event.target.checked
    })
}
  
  render() { 
    //destucture 
    const {ChannelName,Subscribe,Category,CreationDate,About, CheckBox} = this.state;   
    return (
      <div className='container mt-5'>
        <input className='form-control' type="text" name='ChannelName' placeholder='Channel Name' onChange={this.FormChange} value={ChannelName} />

        <input className='form-control' type="text" name='Subscribe' placeholder='Subscriber' onChange={this.FormChange} value={Subscribe} />

        <select name="Category" className='form-control' onChange={this.FormChange} value={Category} >
            <option value="Select">Select</option>
            <option value="Programming">Programming</option>
            <option value="entertainment">entertainment</option>
            <option value="education">education</option>
            <option value="technology">technology</option>
        </select>

        <input type="date" className='form-control' name='CreationDate' onChange={this.FormChange} value={CreationDate} />

        <textarea name="About" placeholder='About' className='form-control' onChange={this.FormChange} value={About} >
        </textarea>

        <div>
            <label>Male</label>
            <input type="radio" name='gender' value="Male" onChange={this.FormChange} /> 
            <label>Female</label>
            <input type="radio" name='gender' value="Female" onChange={this.FormChange} />
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="Checked" name='CheckBox' checked={CheckBox} onChange={this.CheckBoxHandle}/>
            <label className="form-check-label" htmlFor="Checked">
                I Agree & Continue
            </label>
        </div>

        <button className='btn btn-primary' onClick={()=> console.log(this.state)}>Submit</button>
        
      </div>
    )
  }
}

export default Input ; 