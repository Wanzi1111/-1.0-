'use strict';

const Controller = require('egg').Controller;

class UserlistController extends Controller {
    async index() {
        let data = await this.service.user.roleList();
        this.ctx.body = { code: 0, msg:'获取身份列表成功', data };
    }
}

module.exports = UserlistController;
