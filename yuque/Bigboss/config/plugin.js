'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  mysql:{
    enable: true,
    package: 'egg-mysql',
  }
};
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
}