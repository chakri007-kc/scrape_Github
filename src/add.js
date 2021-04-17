import React, { Component } from 'react'
import List from './list'
import Git from './git'
// import Poke from './download.png'
    import './git.css'
// import axios from "axios";
// const API_URL = "https://api.github.com/users";
class add extends Component{
    constructor(props)
    {
        super(props);
        this.state={all:[]};
        this.list=this.list.bind(this);
        this.remove=this.remove.bind(this);
        this.clear=this.clear.bind(this);
    }
    list(kk)
    {    
        this.setState({all:[...this.state.all,kk]});
    }
    remove(id)
    {
        this.setState({all: this.state.all.filter(u=> u.id!==id)})
    }
    clear()
    {
        this.setState({all: []})
    }
    // async componentDidMount(){
       
    //     console.log("hii");

    //     this.state.all.map(k=>{
    //             let link1=await axios.get(`${API_URL}/${k.name}`);
    //             this.setState({friends: link1});
    //     })
    // }
    // async getgit()
    // {
        // let link2=await axios.get(`${API_URL}/jamiyashwanth/`);
        // fetch(`${API_URL}/jamiyashwanth`);
        // console.log("hii");
    // }

    persons()
    {
        return(
            <div>
                
                {this.state.all.map(k=>( 
                    <div key={k.id} >
                        <Git                           
                            id={k.id}
                            name={k.name}
                            image={k.avatar_url}
                            followers={k.followers}
                            following={k.following}
                            create={k.created_at.slice(0,10)}
                            last_post={k.updated_at.slice(0,10)}
                            url={k.html_url}
                            repo={`https://github.com/${k.login}?tab=repositories`}
                            r={()=>this.remove(k.id)}
                        />
                        {console.log(k)}
                     </div>
                    ))}
            </div>
        )
    }
    render(){
        return(
            <div>
                {/* <img  className="displayed" src={Poke} alt="hiii" /> */}
                <List kk={this.list} rr={()=>this.clear()}/>
                {/* <button className="clear" onClick={this.clear}>Remove all</button> */}
                {this.persons()}
                {/* {console.log(this.props.name)} */}
                
            </div>
        );
    }
}
export default add;