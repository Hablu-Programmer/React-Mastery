import React,{Component} from "react";

class About extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:"Eshan Ahmed", 
            age: 19,
            Prof:"Content Creating"
        }

    }

    ChangeValue(a){
        this.setState(
            {
                Prof:"Freelancing"
            }
        )
    }

    ChangeMind = this.ChangeValue.bind(this, this.a)
    render(){
        return (
            <>
                <h1>My Profession Is {this.state.Prof} </h1>
                <button onClick={this.ChangeMind}>Change Value</button>
            </>
        )
    }
}

export default About;