import React, { Component } from 'react'
import wangEditor from "wangeditor";
import {Input} from "antd"

export default class Knowadd extends Component {
    state={
        ipt:""
    }

    render() {
        return (
            <div>
                <div>知识库标题<Input type="text" ref="title"/></div>

                <div>知识库内容</div>
            <div ref="editor"></div>

            <button onClick={()=>this.sub()}>提交</button>
            </div>     
        )
    }
    componentDidMount(){//张声明周期中实例一个编译器
        const ED=new wangEditor(this.refs.editor)
        ED.create()
        this.ED=ED
    }
    sub =()=>{
    let bigdata={
      id:Math.random()*100,
      knowName:this.refs.title.input.value,
      knowtext:this.ED.txt.html().replace(/<[^>]+>/g,"")
    }
    console.log(bigdata)
    this.axios("post","/getknowadd",{bigdata})
    this.props.history.push("/list/knowlist")
    }
}

