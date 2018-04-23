# 简介
pilipa 做账主系统，主要由react+redux+stylus+webpack+antd+typescript构成

# 安装
```
npm config set registry https://registry.npm.taobao.org (必须)
yarn install
```

# 启动
npm run dev || yarn dev

# 测试
```
yarn test:watch(监测模式)
yarn test
```

# 打包
yarn build

# src项目结构描述
* actions 存储redux的Action
* assets 存储静态资源
* components 存储组件
* containers 容器
* pages 存储对应路由的页面
* plugins 插件
* reducers 存储redux的reducers
* router 路由配置
* stylus stylus存储目录
* app.js 入口js
* index.html 入口html页面

# babel
* babel-preset-env(推荐) 替代了 babel-preset-es2015

# 参考文档
* react 官方文档 [https://reactjs.org/](https://reactjs.org/)
* 使用antd为了减少项目大小，使用 babel-plugin-import [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)
* stylus参考网址 [http://stylus-lang.com/](http://stylus-lang.com/)
* antdesign参考网址 [https://ant.design/index-cn](https://ant.design/index-cn)
* redux中文文档 [http://www.redux.org.cn/](http://www.redux.org.cn/)
* react-router参考网址 [https://reacttraining.com/react-router/web/guides/philosophy](https://reacttraining.com/react-router/web/guides/philosophy)
* redux-actions [https://redux-actions.js.org/](https://redux-actions.js.org/)
* webpack中文文档地址 [https://doc.webpack-china.org](https://doc.webpack-china.org/)
* tslint文档 [https://palantir.github.io/tslint/](https://palantir.github.io/tslint/)
* eslint文档 [http://eslint.cn/](http://eslint.cn/)
* jasmine文档 [https://jasmine.github.io/](https://jasmine.github.io/)
* enzyme文档 [http://airbnb.io/enzyme/](http://airbnb.io/enzyme/)
* sinon文档 [http://sinonjs.org/](http://sinonjs.org/)

# issue
* [typescript]  <font color="red">Cannot find name 'PropertyKey'</font>
```
在es2015中才有propertyKey数据类型 在tsconfig.json配置文件compilerOptions添加lib
"lib": [
  "es2015",
  "dom"
]
```
