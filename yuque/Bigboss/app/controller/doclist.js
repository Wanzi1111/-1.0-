'use strict';

const Controller = require('egg').Controller;

class DoclistController extends Controller {
  async index() {
    const { ctx } = this;

    let doclistdata=await ctx.service.doc.reqdocdata();

    // ctx.inof={role:"vip"}
    // let onshow=ctx.inof.role==="vip"?false:true;
    let arr=doclistdata.map(item=>{return {name:item.name,docid:item.docid,text:item.text,type:item.type }})


    ctx.body = {code:0,msg:"请求文档列表成功",doclistdata:arr};
  }
}

module.exports = DoclistController;
