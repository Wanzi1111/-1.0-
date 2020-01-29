'use strict';

const Controller = require('egg').Controller;

class SavedocController extends Controller {
  async index() {
    const { ctx } = this;
    const {savadata}=ctx.request.body;
    // const savadata={
    //     name:"吹风机",
    //     docid:2,
    //     text:"我们把风扇改成了吹风机"
    // }
    const doclist=await ctx.service.doc.reqdoclist(savadata);
    if(doclist.affectedRows===1){
        let doclistdata=await ctx.service.doc.reqdocdata();
        ctx.body = {code:0,msg:"保存编辑文档成功",doclistdata};
    } 
  }
}
module.exports = SavedocController;
