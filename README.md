# vue2.ele.me
webpack2+vue2搭建饿了么，用于学习研究vue2。
# 技术栈
webpack2 + vue2 + vuex + vue-router + ES6/7 + fetch + sass + svg
# 项目运行
#### 项目中使用ES6/7 等新属性，nodejs 要求 6.0 以上版本，使用node+express搭建本地服务返回交互数据，PM2做部署。
  npm install -g pm2  安装pm2
  
  git clone https://github.com/sk8ks/vue2.ele.me.git

  cd vue2.ele.me

  npm install
  
  pm2 startOrRestart ecosystem.json (本地运行后访问 http://localhost:8080)
  
  如您不使用以上方式，也可以更改package配置：
  
  <pre>"scripts": { "start": "node build/dev-server.js"}</pre>
  
  然后运行 npm start
# 在线DEMO

<img src="http://rossi.wang:8081/vue2.ele.me/1503386470.png" width="180px" height="180px" />

<p>建议用扫描上方二维码，并在手机浏览器中预览</p>

http://rossi.wang:3001

# 项目功能
项目功能基本参照官方版本
* 首页
  + 定位
  + 搜索地址
  + 地址附近商家列表
* 商家分类筛选列表
* 个人中心
* 订单
# 更新日志
#### 8.15
    * 新增登录页，实现短信及密码登录功能
    * 更新本地服务，增加帐号token认证
    * 新增订单及个人中心入口页
