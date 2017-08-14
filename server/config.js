const moment = require('moment')

module.exports = {
    role: {     // 用户权限
        admin: 1,
        normal: 2
    },
    token: {    // token配置
        secret: 'vue2.ele.me',      // 密匙
        expires: new Date(moment().add(7, 'days').valueOf()),      // 过期时间（毫秒）
        expiresIn: '7d',        //
    }
}
