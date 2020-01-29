import React, { Component } from 'react'
import { Table,Tag} from 'antd';

export default class Knowlist extends Component {
    state={
        data:[],
        columns:[
            {
              title: 'knowName',
              dataIndex: 'knowName',
            },
            {
              title: 'knowtext',
              dataIndex: 'knowtext',
            },
            {
                title:"操作",
                dataIndex:'btn',
                render:(value,item,key)=>{
                    return <div>
                    <Tag onClick={()=>this.reknow(item.id)}>删除</Tag>
                    </div>
                }
            }
          ]
    }
    render() {
        let {data,columns}=this.state
        return (

            <div>
             <Table rowKey={item=>item.id} columns={columns} dataSource={data} size="middle" />
                
            </div>
        )
    }
    async componentDidMount(){
        let knowdata=await this.axios("get","/getknowlist");
        if(knowdata.data.code===0){
            this.setState({
                data:knowdata.data.konwlist
            })
        }

    }

   async reknow(id){//删除知识库
       let newdata=await this.axios("delete","/getdeleteknow",{id})
       if(newdata.data.code===0){
           this.setState({
               data:newdata.data.knowlist
           })
       }
    }
}
