import React, { Component } from 'react'
import { Table,Tag } from 'antd';
export default class Doclist extends Component {
    state={
        docdata:[],
        columns:[
            {
              title: 'Name',
              dataIndex: 'name',
            },
            {
              title: 'Docid',
              dataIndex: 'docid',
            },
            {
              title: 'Text',
              dataIndex: 'text',
            },
            {
                title: 'Type',
                dataIndex: 'type',
              },
            {
                title:"操作",
                dataIndex:'btn',
                render:(value,item,key)=>{
                    return <div>
                    <Tag onClick={()=>this.setdoc(item)}>编辑</Tag>
                    <Tag onClick={()=>this.redoc(item.docid)}>删除</Tag>
                    </div>
                }
            }
          ]
    }
    render() {
        const {docdata,columns}=this.state
        console.log(docdata)
        return (
            <div>
             <Table rowKey={item=>item.docid} columns={columns} dataSource={docdata} size="middle" />
            </div>
        )
    }
   async componentDidMount(){
      let doclist=await  this.axios("get","/getdoclist");
      this.setState({
          docdata:doclist.data.doclistdata
      })
    }
   async redoc(docid){
       let redoc=await this.axios("delete","/getdeletedoc",{docid});
       this.setState({
           docdata:redoc.data.doclistdata
       })
   }
   setdoc=(data)=>{
       this.props.history.push("/list/setdoc",data)

   }
}

