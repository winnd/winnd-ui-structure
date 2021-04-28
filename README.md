
winnd-ui-structure vue的ui库/通用模板项目构建中（已集成styleguidist自动生成文档）

```
# 自动生成doc(测试环境）
npm run styleguide

# 自动生成doc(生产环境）
styleguide:build
```

* 私服测试环境发布:
    * 当前为测试环境 使用[verdiccio](https://juejin.im/post/5cc81991f265da036d79c8ca)
    * 使用 verdiccio 跑起来后查看 http://localhost:4873/
    * 账号 root/root
    * 发布 npm publish --registry http://localhost:4873
