const Service=require("egg").Service
class UserService extends Service {
    async reqlogin(user) {//登录
    return   await this.app.mysql.select('bigboss',{where:{user}});
    }
    async reqregister(user,pwd,role="wip") {//注册
        return   await this.app.mysql.insert('bigboss',{user:null,user,pwd,role});
    }
    async reqlist(role) {//首页管理界面
        return   await this.app.mysql.select('viewsdata',{where:{role}});
    }
    async requserlist() {//用户列表
        return   await this.app.mysql.select('bigboss')
    }
    async delectuser(userid) {//删除用户
        return   await this.app.mysql.delete('bigboss',{userid})
    }
    async reqrevisedata(bigdata) {//编辑用户
        return   await this.app.mysql.update('bigboss',bigdata,{where:{userid:bigdata.userid}})
    }
    async roleList(){
        return   await this.app.mysql.select('role_list');
    }
  }
  module.exports=UserService