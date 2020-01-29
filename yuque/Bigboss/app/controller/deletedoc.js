'use strict';

const Controller = require('egg').Controller;

class DeletedocController extends Controller {
  async index() {
    const { ctx } = this;
    const {docid}=ctx.request.body;
    const deletedoc=await ctx.service.doc.reqdeletedoc(docid);
    if(deletedoc.affectedRows===1){
        let doclistdata=await ctx.service.doc.reqdocdata();
        ctx.body = {code:0,msg:"删除文档列表成功",doclistdata};
    }
  }
}
module.exports = DeletedocController;
