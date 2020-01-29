import React, { Component } from 'react'
import wangEditor from "wangeditor";
import {Input,Select} from "antd"
const { Option } = Select;

export default class Docadd extends Component {
    state={
        opt:[],
        treach:"请选择"
    }
    render() {
        const {opt,treach}=this.state
        // console.log(treach)
        return (
            <div>
                <div>文档标题<Input type="text" ref="title"/></div>


                <div>文档内容</div>
                <div ref="editor"></div>



                <div>选择知识库</div>
                <div style={{float:"left"}}>
                <Select
                style={{ width: 200 }}
                placeholder="请选择所属知识库"
                value={treach}
                onChange={e=>{this.setState({treach:e})}}
                >
                {
                 opt.map(item=>{
                 return  <Option key={item.knowtext}  >{item.knowtext}</Option>
                })
                 }
             </Select>   
        </div>


        <button onClick={()=>this.sub()}>提交</button>
            </div>
        )
    }
   componentDidMount(){
       const ED=new wangEditor(this.refs.editor);
       ED.create();
       this.ED=ED;
       this.getdata()
   }
   getdata=async ()=>{
    let treach=await this.axios("get","/getknowlist");
    this.setState({
      opt:treach.data.konwlist
    })
  }
  //提交数据
  sub =()=>{
      let bigdata={
      docid:null,
      name:this.refs.title.input.value,
      text:this.ED.txt.html().replace(/<[^>]+>/g,""),
      time:new Date().getTime(),
      type:this.state.treach
    }
    console.log(bigdata)
    this.axios("post","/getdocadd",{bigdata})
    this.props.history.push("/list/doclist")

  }

}
