import React, { Component } from 'react'
import axios from "axios";
import './git.css'
const API_URL = "https://api.github.com/users";
class list extends Component{
    constructor(props)
    {
        super(props);
        this.state={name:"", friends:""}
        this.add=this.add.bind(this);
        this.handle=this.handle.bind(this);
    }
    add(evt)
    {        
        this.setState({[evt.target.name]:evt.target.value});
    }
    async handle(evt)
    {
        evt.preventDefault();
        console.log("hii");

        try{
            // if(this.state.friends === null)
            // {
            //     throw new Error("Invalid id"); 
            // }
                 const link=await axios.get(`${API_URL}/${this.state.name}`);
        this.setState({friends:link.data});
            this.props.kk(this.state.friends);
            this.setState({name:"",friends:""})
        }
        catch(err)
        {
            alert("Invalid id")
        }
        
    }
    render(){
        return(
            <div onSubmit={this.handle} className="formdiv">
                <form className="forms">
                    <label htmlFor='name'> <i class="fab fa-github" ></i>  Github user id: </label>
                        <input
                         className="all"
                         type="text"
                        id="name"
                        name="name"
                        placeholder="User id"
                        value={this.state.name}
                        onChange={this.add}
                    />
                    <button className="allbutton" ><i class="fas fa-search"></i></button>
                </form>                
                <button className="clear" onClick={this.props.rr}>Remove all</button>
            </div>
        );
    }
}
export default list;