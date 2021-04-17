import React, { Component } from 'react'
import List from './list'
import Git from './git'
import './git.css'
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
                <List kk={this.list} rr={()=>this.clear()}/>
                {this.persons()}
                
            </div>
        );
    }
}
export default add;