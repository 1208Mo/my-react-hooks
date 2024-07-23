# my-hooks

React 业务 Hooks

其实是一个练手项目啦

##  能力支持

使用 Typescript 构建，提供完善的类型定义

支持文档记录，支持 demo 演示

配套完整的测试用例，帮助您提升项目健壮性


### 包管理工具 -- pnpm

作为基础包，选择社区内更推崇的`pnpm`作为包管理工具，原因有：

1. `pnpm`安装速度更快，磁盘空间利用率高；
2. `pnpm`的`lock`文件适用于多个单一子功能的模块，且能保证每个模块的依赖不耦合；
3. 打包产物清晰，打包后产物确保全部为静态站点资源；

### 构建工具 -- webpack & gulp

1. 最终产物为多个基础子功能模块的耦合，选择`gulp`这种流程式的构建工具，能够更清晰的表达构建流程；
2. 选择常用的`webpack`作为构建产物的声明式接入方式；

### 静态文件打包工具 -- dumi

就目前前端社区而言，`dumi`是当之无愧的为组件研发而生的静态站点解决方案；


##  运行

`pnpm install`

`pnpm start`


