import React, { Component } from 'react'
import {Switch,Route,Redirect} from "react-router-dom";
export default class Router extends Component {
    render() {
        let routedata=this.props.data.filter(item=>item.component);
        let redirectdata=this.props.data.filter(item=>item.redirect);
        return (
       
            <Switch>
                {
                   routedata.map((item,key)=>{
                       if(item.children){
                        return <Route key={key} path={item.path}  render={props=>(<item.component data={item.children} {...props}/>)}></Route>
                       }else{
                        return <Route key={key} path={item.path} component={item.component}></Route>
                       }  
                   })
                }
                {/* 重定向 */}
                {
                   redirectdata.map((item,key)=>{
                       return <Redirect exact key={key} from={item.path} to={item.redirect}></Redirect>
                   })
                }
            </Switch>
        )
    }
}
