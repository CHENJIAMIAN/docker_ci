# docker_ci

<!-- codex-github-rules:bilingual-summary -->
> **中文简介**：使用 Docker 和 GitHub Webhook 实现持续集成的测试项目

> **English summary**: A test project for continuous integration with Docker and GitHub Webhooks

> **Fork 说明 / Fork note**：这是上游项目的公开 fork；下方保留并延续上游文档。

---
测试使用Docker / Github Webhook实现CI持续集成

- docker-compose
- gitlab webhooks


## 示例代码运行
- NodeJS 8.0 need https://nodejs.org/en/
- Clone or download this repository
Enter your local directory, and 
- start webhooks watcher
``` bash
npm install
npx ## 示例代码运行
- NodeJS 10 need https://nodejs.org/en/
- Clone or download this repository
Enter your local directory, and 
- install dependencies:
``` bash
npm install
npm install pm2 -g
pm2 start webhooks.js --watch

```




设置Webhooks

<!-- fork-disclosure: CHENJIAMIAN -->
## Fork-specific Changes / Fork 专属改动

- **Upstream / 上游**: [su37josephxia/docker_ci](https://github.com/su37josephxia/docker_ci)
- **What changed / 具体改动**:
  - 中文：进行了全栈重构：后端改用 Egg.js、MongoDB、JWT 和 Swagger，并新增用户、权限和单文件上传 API。
  - 中文：前端改用 Ant Design Pro/Umi，提供账户/手机号登录、授权、通知、多语言和列表 CRUD 页面。
  - 中文：同步更新 Docker Compose、Dockerfile、Nginx 和部署脚本；编排 backend:7001、Mongo:8802 和 Nginx:8091。
  - English: Performs a full-stack rewrite: the backend uses Egg.js, MongoDB, JWT, and Swagger, with user, permission, and single-file-upload APIs.
  - English: The frontend uses Ant Design Pro/Umi and provides account/mobile login, authorization, notifications, localization, and list CRUD pages.
  - English: Docker Compose, Dockerfiles, Nginx, and deployment scripts are updated together; the stack orchestrates backend:7001, Mongo:8802, and Nginx:8091.
- **Evidence / 依据**: [$(3f114c369a7eff39f86f0b7919c92f677c77856e.Substring(0, 7))](https://github.com/CHENJIAMIAN/docker_ci/commit/3f114c369a7eff39f86f0b7919c92f677c77856e), [$(2319ecd319ba5b6a2dc86666b5f9c52d770cafa2.Substring(0, 7))](https://github.com/CHENJIAMIAN/docker_ci/commit/2319ecd319ba5b6a2dc86666b5f9c52d770cafa2)
- **Scope / 范围**: These are fork-maintained changes and are not represented as upstream releases. / 这些改动由本 fork 维护，不应视为上游正式发布版本。
