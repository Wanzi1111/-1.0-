'use strict';

const Controller = require('egg').Controller;

class UserlistController extends Controller {
  async index() {
    const { ctx } = this;
    const userlist=await ctx.service.user.requserlist();
    // ctx.info={role:"vip"}
    let onshow=ctx.info.role==="vip"?false:true
    let arr=userlist.map(item=>{return {user:item.user,pwd:item.pwd,userid:item.userid,role:item.role,onshow:onshow}})
    ctx.body ={code:0,msg:"用户列表请求成功",userlist:arr};
  }
}
module.exports = UserlistController;
