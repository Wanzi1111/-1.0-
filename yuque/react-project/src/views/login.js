import React, { Component } from 'react'
export default class Login extends Component {
    state={
        user:"",
        pwd:"",
        isshow:true
    }
    render() {
        const {user,pwd,isshow}=this.state
        return ( 
            <div>
            {
                isshow?
                <div>
               <div className="logerimg">
                <img src="/img/yq.png" alt=""/>
                </div>
               用户名：<input type="text" name="" id="" className="user" value={user} onChange={(e)=>{this.setState({user:e.target.value})}}/>
               <br/>
               <br/>
           
               密码：<input type="text" name="" id="" className="pwd" value={pwd} onChange={(e)=>{this.setState({pwd:e.target.value})}}/>
               <br/>
               <br/>
               <button onClick={()=>this.relogin("/getlogin")}>登录</button>

                </div>:
                <div>

                <div className="logerimg">
                <img src="/img/yq.png" alt=""/>
                </div>
               用户名：<input type="text" name="" id="" className="user" value={user} onChange={(e)=>{this.setState({user:e.target.value})}}/>
               <br/>
               <br/>
           
               密码：<input type="text" name="" id="" className="pwd" value={pwd} onChange={(e)=>{this.setState({pwd:e.target.value})}}/>
               <br/>
               <br/>
               <button onClick={()=>this.relogin("/getregister")}>注册</button>
                </div>
            }         
            </div>
        )
    }
   async relogin(url){
       let {user,pwd}=this.state
       const logindata=await this.axios("post",url,{user,pwd});
       const {code,msg}=logindata.data



        if(code===5){//非空校验
            alert(msg)
            return
        }

       if(code===4){//账号未注册  账号已存在
        alert(msg)
        this.setState({isshow:false})
        return
       }
       if(code===1){//密码错误
        alert(msg)
        return
        }
        
       if(code===2){//登录成功  注册成功
        this.setState({isshow:true})   
        if(url==="/getlogin"){
            window.localStorage.setItem("user",user)
            window.localStorage.setItem("token",logindata.data.token)
            this.props.history.push("/list");//跳管理列表页面
           }     
       }    
    }
}
