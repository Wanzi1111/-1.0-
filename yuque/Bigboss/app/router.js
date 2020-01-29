'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);




  router.post('/getlogin', controller.login.index);//登录
  router.post('/getregister', controller.register.index);//注册
  router.get('/getlist', controller.list.index);//首页管理界面

  
  router.get("/getuserlist",controller.userlist.index);//用户列表
  router.delete("/getdeleteuser",controller.deleteuse.index);//删除用户
  router.put("/getreviseuser",controller.reviseuser.index);//编辑用户


  router.get("/getknowlist",controller.knowlist.index);//知识库列表
  router.delete("/getdeleteknow",controller.deleteknow.index);//删除知识库列表
  router.post("/getknowadd",controller.knowadd.index);//添加知识库列表
  


  router.get("/getdoclist",controller.doclist.index);//文档列表
  router.delete("/getdeletedoc",controller.deletedoc.index);//删除文档
  router.put("/getrevisedoc",controller.revisedoc.index);//点击编辑文档按钮
  router.put("/getsavedoc",controller.savedoc.index);//点击保存编辑文档
  router.post("/getdocadd",controller.docadd.index);//添加文档


  router.get('/getRoleList',controller.roleList.index);  //获取用户身份列表


  


  
  



};
