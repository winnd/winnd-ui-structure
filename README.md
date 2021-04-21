
```
# 自动生成doc(测试环境）
npm run styleguide

# 自动生成doc(生成环境）
styleguide:build
```

#### ↓↓↓ todo 未整理 ↓↓↓
[Part 1](https://itnext.io/vuejs-and-webpack-4-from-scratch-part-1-94c9c28a534a):
  - Testing using @vue/test-utils and Jest

[Part 3](https://itnext.io/vue-js-and-webpack-4-from-scratch-part-3-3f68d2a3c127):
  - Static assets processing
  - ESLint for linting
  - Testing using Jest
    - _For debugging the tests, first need to open `chrome:inspect` on Google Chrome and click the Open dedicated DevTools for Node then run the command `npm run test:debug` from your console._

* 打包器: 
    * webpack(开发环境)
    * rollup(生产环境， 搭建中)

* 测试环境发布: 
    * 当前为测试环境 使用[verdiccio](https://juejin.im/post/5cc81991f265da036d79c8ca)
    * 使用 verdiccio 跑起来后查看 http://localhost:4873/
    * 账号 root/root
    * 发布 npm publish --registry http://localhost:4873

* css预编译器
    * post css (还未添加)

#### todo 

rollup的 index.html 里面要加 id=app

添加测试

版权声明

自动化

styleguidist暂不支持vue3， 怕是还是要手动写md的doc

winnd-ui-structure vue的ui库/通用模板项目构建中（已集成styleguidist自动生成文档）
