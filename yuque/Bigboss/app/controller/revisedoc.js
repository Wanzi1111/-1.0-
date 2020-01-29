'use strict';

const Controller = require('egg').Controller;

class RevisedocController extends Controller {
  async index() {
    const { ctx } = this;
    const {docid}=ctx.request.body;
    const finddoc=await ctx.service.doc.reqfinddoc(docid);//当前编辑的那一条信息
    ctx.body = {code:0,msg:"查找编辑信息成功",finddoc};
  }
}
module.exports = RevisedocController;
