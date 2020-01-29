const Service=require("egg").Service
class KnowService extends Service {
    async reqknowlist() {//知识库列表
        return   await this.app.mysql.select('knowdata')
    }
    async reqdeleteknow(id) {//删除知识库列表信息
        return   await this.app.mysql.delete('knowdata',{id})
    }
    async reqaddknowlist(bigdata) {//添加知识库列表信息
        console.log(bigdata)
        return   await this.app.mysql.insert('knowdata',{knowName:bigdata.knowName,id:null,knowtext:bigdata.knowtext,people:bigdata.people})
    }
  }
  module.exports=KnowService