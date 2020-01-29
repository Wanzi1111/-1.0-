import Login from "../views/login";//登录页面
import List from "../views/list/list";//管理列表页面
import Userlist from "../views/list/page/userlist";//用户列表
import Knowlist from "../views/list/page/knowlist";//知识库列表
import Knowadd from "../views/list/page/knowadd";//添加知识库
import Doclist from "../views/list/page/doclist";//文档列表
import Docadd from "../views/list/page/docadd";//添加文档
import Setuser from "../views/list/page/setuser";//编辑用户
import Setdoc from "../views/list/page/setdoc";//编辑文档

export default [{
    path:"/",
    redirect:"/login"
},{
    path:"/login",
    component:Login
},{
    path:"/list",
    component:List,
    children:[{
        path:"/list",
        redirect:"/list/userlist"
    },{
        path:"/list/userlist",//用户列表
        component:Userlist
    },{
        path:"/list/knowlist",//知识库列表
        component:Knowlist
    },{
        path:"/list/knowadd",//添加知识库
        component:Knowadd
    },{
        path:"/list/doclist",//文档列表
        component:Doclist
    },{
        path:"/list/docadd",//添加文档
        component:Docadd
    },{
        path:"/list/setuser",//编辑用户
        component:Setuser
    },{
        path:"/list/setdoc",//编辑文档
        component:Setdoc
    }]
}]