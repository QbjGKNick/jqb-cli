- 先创建可执行的脚本 #! /usr/bin/env node
- 配置package.json 中的bin字段
- npm link 到本地环境（默认以name为基准）

> link 相当于将当前本地模块链接到 npm 目录下，这个 npm 目录可以直接访问，所以当前包就可以直接访问了