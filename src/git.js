import React, { Component } from 'react'
import './git.css'
class git extends Component{
    render(){
        return(

            <div className="info">
                
                <h2>{this.props.name}</h2>
                <img src={this.props.image} alt={this.props.name}/>
                <div className="follow">
                    <h3>Following : {this.props.following}</h3>
                    <h3>Followers : {this.props.following}</h3>    
                </div>
                     
                {/* <h3></h3> */}
                <h3>Account created : {this.props.create}</h3>
                <h3>Last post : {this.props.last_post}</h3>
                {/* <h3>{this.props.url}</h3> */}
                <h3>Profile : <a href={this.props.url} target="_blank" rel="noopener noreferrer">click here</a></h3>   

               <h3>Repo Url : <a href={this.props.repo} target="_blank" rel="noopener noreferrer">click here</a></h3> 

                <button onClick={this.props.r} className="remove"><h4>Remove  <i class="fas fa-user-minus"></i></h4></button>

            </div>
        );
    }
}
export default git;