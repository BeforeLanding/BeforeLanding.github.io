# BeforeLanding

个人博客，部署在 <https://beforelanding.github.io>。基于 [Astro](https://astro.build)，文章用 Markdown 写，推送到 `main` 后由 GitHub Actions 自动发布到 GitHub Pages。

## 本地开发

需要 Node.js 22.23+ 与 pnpm。

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # 输出到 dist/
pnpm preview    # 预览构建结果
```

## 写一篇文章

1. 复制 `src/content/blog/_template.md`，改成你想要的文件名。文件名就是 URL：`my-post.md` → `/blog/my-post/`。
2. 填好开头的元信息：

   | 字段          | 必填 | 说明                               |
   | ------------- | ---- | ---------------------------------- |
   | `title`       | 是   | 标题                               |
   | `pubDate`     | 是   | 发布日期，如 `2026-11-14`          |
   | `description` | 否   | 一句话摘要，用于搜索结果和 RSS     |
   | `updatedDate` | 否   | 更新日期                           |
   | `tags`        | 否   | 标签数组，自动生成 `/tags/<标签>/` |
   | `draft`       | 否   | `true` 时只在本地可见，不会发布    |

3. `pnpm dev` 预览，满意后提交并推送。

以下划线开头的文件（如 `_template.md`）不会被收录。

## 目录

```
src/
  consts.ts            站点名、简介、导航
  content.config.ts    文章字段定义
  content/blog/        文章（Markdown）
  data/projects.ts     项目列表
  layouts/Base.astro   页面骨架（head、页眉、页脚）
  components/          页眉、页脚、文章列表、项目卡片
  pages/               路由：首页、文章、标签、项目、关于、RSS、404
  styles/global.css    配色与正文排版
```

## 常见修改

- **名字 / 简介 / 导航**：`src/consts.ts`
- **首页自我介绍**：`src/pages/index.astro`
- **关于页**：`src/pages/about.astro`
- **项目**：`src/data/projects.ts`，`featured: true` 的会出现在首页
- **配色**：`src/styles/global.css` 顶部的 CSS 变量（明、暗各一组）
- **自定义域名**：改 `astro.config.mjs` 里的 `site` 和 `public/robots.txt`，并新增 `public/CNAME`

## 部署

仓库名须为 `BeforeLanding.github.io`。首次推送后，在仓库 **Settings → Pages** 把 **Source** 设为 **GitHub Actions**；之后每次推送到 `main` 都会自动构建发布（见 `.github/workflows/deploy.yml`）。
