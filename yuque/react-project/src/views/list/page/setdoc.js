import React, { Component } from 'react'
import {Input,Button,Select } from 'antd';
const { Option } = Select;

export default class Setdoc extends Component {
    state={
        data:this.props.location.state,
        name:this.props.location.state.name,
        text:this.props.location.state.text,
        opt:[],
        options:[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
            }
          ]
      
    }
    render() {
       const {name,text,opt}=this.state
       console.log(opt)
        return (
            <div className="iptfrom">
      <p><Input placeholder="Name" id="Name" value={name} onChange={(e)=>{this.changerole(e.target.value)}}/></p>
      <p><Input placeholder="Text" id="Text" value={text} onChange={(e)=>{this.changetext(e.target.value)}}/></p>
      <Select
    style={{ width: 200 }}
    placeholder="请选择所属知识库">
    {
      opt.map(item=>{
        return  <Option key={item.id} defaultValue={item.knowtext}>{item.knowtext}</Option>
      })
    }
  </Select>
    <Button type="提交" >提交</Button>           
            </div>
        )
    }
    async componentDidMount(){
      let treach=await this.axios("get","/getknowlist");
      this.setState({
        opt:treach.data.konwlist
      })

    }
    changename=(e)=>{
        this.setState({
            name:e
        })
    }
    changetext=(e)=>{
        this.setState({
            text:e
        })
    }
    // async sub(docid){
    //     let {user,role}=this.state
    //     let bigdata={
    //         user,role,docid
    //     }
    //  await this.axios("put","/getreviseuser",{bigdata});
    //     this.props.history.push("/list/doclist")

    //     }
}





// function onChange(value) {
//   console.log(`selected ${value}`);
// }

// function onBlur() {
//   console.log('blur');
// }

// function onFocus() {
//   console.log('focus');
// }

// function onSearch(val) {
//   console.log('search:', val);
// }

