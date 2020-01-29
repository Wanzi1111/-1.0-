import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import Routeview from "../../router/router";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default class List extends Component {
    state = {
        collapsed: false,
        name:"",
        role:"",
        newlist:[],
        listdata:[{
            title:"用户管理",
            icontype:"file",
            key:"sub1",
            nextlist:[{
                title:"用户列表",
                key:"1",
                to:"/list/userlist"
            }]
        },{
            title:"文档管理",
            icontype:"user",
            key:"sub2",
            nextlist:[{
                title:"文档列表",
                key:"2",
                to:"/list/knowlist"
            },{
                title:"添加文档",
                key:"3",
                to:"/list/knowadd"
            }]
        },{
            title:"知识管理库",
            icontype:"team",
            key:"sub3",
            nextlist:[{
                title:"知识库列表",
                key:"4",
                to:"/list/doclist"
            },{
                title:"添加知识库",
                key:"5",
                to:"/list/docadd"
            }]
        }
        ]
      };
      onCollapse = collapsed => {
        this.setState({ collapsed });
      }

     async componentDidMount(){
        const logindata=await this.axios("get","/getlist");
        
        if(logindata.data.code===0){
          this.setState({
            newlist:logindata.data.newlist,
            name:logindata.data.user,
            role:logindata.data.role
          })
        }
      }


      back=()=>{//退出用户账户登录
        this.props.history.push("/login");//返回登录页面
        window.localStorage.clear("token")
      }
    render() {
        let {newlist}=this.state
        // console.log(this.state.newlist,'tab')
        return (
            <div>
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {
              newlist.map((item)=>{
                  return        <SubMenu 
                  key={item.key}
                  title={
                    <span>
                      <Icon type={item.icontype} />
                      <span>{item.typetitle}</span>
                    </span>
                  }
                >
                {
                  item.children.map(jtem=>{
                      return <Menu.Item onClick={()=>this.props.history.push(jtem.to)} key={jtem.key}>{jtem.title}</Menu.Item>
                  })
                }
                </SubMenu>

              })

          }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0,textAlign:"right",marginRight:"5px"}}>
          <span style={{marginRight:"5px"}}>{this.state.name}</span>|<span style={{marginLeft:"5px"}} onClick={()=>this.back()}>退出</span>
          </Header>
          <Content style={{ margin: '0 16px' }}>
          
          <Routeview data={this.props.data}></Routeview>
          </Content>

          <Footer style={{ textAlign: 'center' }}>{this.state.role}</Footer>
        </Layout>
      </Layout>
                
            </div>
        )
    }
}