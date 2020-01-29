import React, { Component } from 'react'
import {Input,Button } from 'antd';
export default class Setuser extends Component {
    state={
        data:this.props.location.state,
        user:this.props.location.state.user,
        role:this.props.location.state.role
    }
    render() {
       const {data,user,role}=this.state

        return (
            <div className="iptfrom">
      <p><Input placeholder="User" id="User" value={user} onChange={(e)=>{this.changeuser(e.target.value)}} /></p>
      <p><Input placeholder="Role" id="Role" value={role} onChange={(e)=>{this.changerole(e.target.value)}}/></p>
    <Button type="提交" onClick={()=>this.sub(data.userid)}>提交</Button>           
            </div>
        )
    }

    changeuser=(e)=>{
        this.setState({
            user:e
        })
    }
    changerole=(e)=>{
        this.setState({
            role:e
        })
    }
    async sub(userid){
        let {user,role}=this.state
        let bigdata={
            user,role,userid
        }
     await this.axios("put","/getreviseuser",{bigdata});
        this.props.history.push("/list/userlist")

        }
}
