import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import axios from "axios";
React.Component.prototype.axios=(method,url,data)=>{
    let val=method==="get"?"params":"data";
    let obj={
        method,
        url,
        headers:{
            tokens:localStorage.getItem("token")
        }
        
    }
    obj[val]=data;

    return axios(obj).catch(error=>{
        if(error.response.status===404){
            alert("未定义")
        }
    })

}

ReactDOM.render(<App />, document.getElementById('root'));
