'use strict';

const Controller = require('egg').Controller;

class DeleteknowController extends Controller {
  async index() {
    const { ctx } = this;
    const {id}=ctx.request.body;
    const knowlist=await ctx.service.know.reqdeleteknow(id);
    if(knowlist.affectedRows===1){
        let konwlist=await ctx.service.know.reqknowlist();
        ctx.body = {code:0,msg:"删除知识库成功",konwlist};
    }
  }
}

module.exports = DeleteknowController;
