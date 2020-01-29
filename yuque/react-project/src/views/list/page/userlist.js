import React, { Component } from 'react'
import { Table,Tag} from 'antd';

export default class Userlist extends Component {
    state={
        data:[],
        columns:[
          {
            title: 'User',
            dataIndex: 'user',
          },
          {
            title: 'Userid',
            dataIndex: 'userid',
          },
          {
            title: 'Role',
            dataIndex: 'role',
          },
          {
              title: '操作',
              dataIndex:"btn",
              render:(value,item,key)=>{
                  return <div>
                      {
                        item.onshow?<div>
                            <Tag onClick={()=>this.serlist(item)}>编辑</Tag>
                        <Tag onClick={()=>this.deleteFunc(item.userid)}>删除</Tag>
                        </div>:<div>
                        不是wip无法进行操作
                        </div>
                      }
                  </div>
               
              }
         
        
            },
        ]
    }

    render() {
    
        let {data,columns}=this.state
        return (
            <div>
                  <div>
                <Table rowKey={item=>item.userid}columns={columns} dataSource={data} size="middle"/>
                  </div>
            </div>
        )
    }

    async componentDidMount(){
        let listuser=await this.axios("get","/getuserlist");
    // console.log(listuser.data)
    if(listuser.data.code===0){
         this.setState({
            data:listuser.data.userlist
        })   
    }
    }
   async deleteFunc(userid){//删除
    let newdata= await this.axios("delete","/getdeleteuser",{userid})
      // console.log(newdata.data.userlist)
      this.setState({
        data:newdata.data.userlist
      })
    }
    serlist=(userlist)=>{//编辑
      this.props.history.push("/list/setuser",userlist)

    }
    
}



