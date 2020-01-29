'use strict';

const Controller = require('egg').Controller;

class ReviseuserController extends Controller {
  async index() {
    const { ctx } = this;
    const {bigdata}=ctx.request.body;
    // delete bigdata.onshow;
    const revisedata=await ctx.service.user.reqrevisedata(bigdata);
    if(revisedata.affectedRows===1){
        const userlist=await ctx.service.user.requserlist();
        ctx.body = {code:0,msg:"修改用户信息成功",userlist};
    }   
  }
}

module.exports = ReviseuserController;
