'use strict';

const Controller = require('egg').Controller;

class DocaddController extends Controller {
  async index() {
    const { ctx } = this;
    const {bigdata}=ctx.request.body;


    // let bigdata={
    //   name:"寒假",
    //   text:"我们的作业有很多"
    // }


    let docaddlist=await ctx.service.doc.reqdocadd(bigdata);
    if(docaddlist.affectedRows===1){
      let doclistdata=await ctx.service.doc.reqdocdata();
      ctx.body = {code:0,msg:'添加文档成功',doclistdata}
    }
  }
}

module.exports = DocaddController;
