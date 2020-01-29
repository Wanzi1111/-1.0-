'use strict';

const Controller = require('egg').Controller;

class KnowlistController extends Controller {
  async index() {
    const { ctx } = this;
    let konwlist=await ctx.service.know.reqknowlist();
    ctx.body = {code:0,msg:"请求知识库列表成功",konwlist};
  }
}
module.exports = KnowlistController;
