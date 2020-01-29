'use strict';

const Controller = require('egg').Controller;
const tablist=require("../../config/tablist");

class ListController extends Controller {
  async index() {
    const { ctx } = this;
    
    // ctx.info={
    //     role:"wip"
    // }

    let {role,user}=ctx.info
    const logindata=await ctx.service.user.reqlist(role)

    let newlist=[];
    let arr=logindata.map(item=>tablist[item.look])


    arr.forEach(item=>{
    let index=newlist.findIndex(val=>val.typetitle===item.typetitle);
    if(index!=-1){
        newlist[index].children.push({
            title: item.title,
            key: item.key,
            to: item.to
        })
        return
    }
        newlist.push({
            typetitle:item.typetitle,
            icontype:item.icontype,
            title: item.title,
            key: item.key,
            to: item.to,
            children:[{
                title: item.title,
                key: item.key,
                to: item.to
            }]

        })
    })
    // console.log(newlist)
    ctx.body = {code:0,newlist,user,role};
  }
}

module.exports = ListController;
