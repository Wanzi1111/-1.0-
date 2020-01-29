const Service=require("egg").Service
class DocService extends Service {
    async reqdocdata() {//文档列表
        return   await this.app.mysql.select('docdata')
    }
    async reqdeletedoc(docid) {//删除文档列表信息
        return   await this.app.mysql.delete('docdata',{docid})
    }
    async reqfinddoc(docid) {//查找当前编辑文档列表信息
        return   await this.app.mysql.select('docdata',{where:{docid}})
    }
    async reqdoclist(savadata) {//保存当前编辑文档列表信息
        return   await this.app.mysql.update('docdata',savadata,{where:{docid:savadata.docid}})
    }
    async reqdocadd(bigdata) {//添加文档列表
        console.log(bigdata)
        return   await this.app.mysql.insert('docdata',{name:bigdata.name,docid:null,text:bigdata.text,type:bigdata.type})
    }
  }
  module.exports=DocService