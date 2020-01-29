'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  async index() {
    const { ctx } = this;
    const {user,pwd}=ctx.request.body;
  const logindata=await ctx.service.user.reqlogin(user,pwd);
  //非空校验
  if(user===""){
    ctx.body = {code:5,msg:"账号不能为空"};
    return
  }
  if(pwd===""){
    ctx.body = {code:5,msg:"密码不能为空"};
    return
  }
  if(logindata.length>0){
    ctx.body = {code:4,msg:"账号已注册"};
    return
  }
  let registerdata=await ctx.service.user.reqregister(user,pwd);
  if(registerdata.affectedRows===1){
    ctx.body = {code:2,msg:"注册成功"};
  } 
  }
}
module.exports = RegisterController;
