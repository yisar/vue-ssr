# vue-ssr

ssr初探，写的比较乱，认真你就输了

### 目录结构

* build 构建相关，包含入口文件和webpack配置
* src 业务相关
* server.js 启动文件

### 说明

* 内置express，可自由更换，如koa、fastify
* 所有目录结构可变，可在webpack中配置别名


# 启动

``` bash

npm install

npm run build

node server.js

```

