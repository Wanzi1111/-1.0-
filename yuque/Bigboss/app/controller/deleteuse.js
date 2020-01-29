'use strict';

const Controller = require('egg').Controller;

class DeleteuserController extends Controller {
  async index() {
    const { ctx } = this;
    const {userid}=ctx.request.body;
    // console.log(userid)
    const delectlist=await ctx.service.user.delectuser(userid);
    const userlist=await ctx.service.user.requserlist();
    if(delectlist.affectedRows===1){
        ctx.body = {code:0,msg:"删除用户信息成功",userlist};
    } 
  }
}

module.exports = DeleteuserController;
