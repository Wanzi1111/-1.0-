'use strict';

const Controller = require('egg').Controller;

class KnowaddController extends Controller {
  async index() {
    const { ctx } = this;
    const {bigdata}=ctx.request.body


  //  let bigdata={
  //     knowName:"花园",
  //     knowtext:"huayuan",
  //     people:"访客"
  //   }
    console.log(bigdata);

    let addknowlist=await ctx.service.know.reqaddknowlist(bigdata);
    if(addknowlist.affectedRows===1){
      let konwlist=await ctx.service.know.reqknowlist();
      ctx.body = {code:0,msg:"添加知识库成功",konwlist};
    }

  }
}

module.exports = KnowaddController;
