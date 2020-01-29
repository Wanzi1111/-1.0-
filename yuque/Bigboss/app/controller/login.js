'use strict';

const Controller = require('egg').Controller;
const jwt=require("jsonwebtoken");

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    const {user,pwd}=ctx.request.body;
  const logindata=await ctx.service.user.reqlogin(user);
  //非空校验
  if(user===""){
    ctx.body = {code:5,msg:"账号不能为空"};
    return
  }
  if(pwd===""){
    ctx.body = {code:5,msg:"密码不能为空"};
    return

  }

  if(logindata.length===0){
    ctx.body = {code:4,msg:"请先注册,账号未注册"};
    return
  }
  if(logindata[0].pwd!=pwd){
    ctx.body = {code:1,msg:"密码错误"};
    return
  }
  let token=jwt.sign({...logindata[0]},"wanzi");//锁  钥匙
    ctx.body = {code:2,msg:"登录成功",token};
  }
}
module.exports = LoginController;
