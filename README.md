# BeforeLanding

Jeffery Jia 的个人网站，包含 Agent 工程作品集、教育与实习经历，以及关于编程 Agent、RAG、评测和 AI for Math 的技术笔记。网站基于 [Astro](https://astro.build)，推送到 `main` 后由 GitHub Actions 自动发布到 GitHub Pages。 [访问网站](https://beforelanding.github.io)

## 本地开发

需要 Node.js 22.23+ 与 pnpm。

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm check      # Astro 和 TypeScript 检查
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

用 `$...$` 写行内公式，用独占一行的 `$$` 包裹块级公式。Mermaid 图表写在标为 `mermaid` 的代码围栏中。模板提供了三种示例。KaTeX 在构建时生成公式，Mermaid 在文章页按需加载并跟随站点明暗主题，GitHub Actions 构建无需安装 Chromium。

## 目录

```
src/
  consts.ts            站点名、简介、导航与联系方式
  content.config.ts    文章字段定义
  content/blog/        文章（Markdown）
  data/projects.ts     项目列表
  data/resume.ts       教育与实习经历
  layouts/Base.astro   页面骨架（head、页眉、页脚）
  components/          页眉、页脚、文章列表、项目卡片
  pages/               路由：首页、文章、标签、项目、关于、RSS、404
  styles/global.css    配色与正文排版
```

## 常见修改

- 在 `src/consts.ts` 更新名字、站点简介和导航。将可公开的求职邮箱填入 `SITE.email`，首页、关于页和页脚会显示邮箱入口。
- 在 `src/pages/index.astro` 更新首页自我介绍，在 `src/pages/about.astro` 更新关于页正文。
- 在 `src/data/resume.ts` 更新 `EDUCATION` 与 `EXPERIENCE`，首页经历速览和关于页时间线共用这两组数据。
- 在 `src/data/projects.ts` 维护作品集。将 `featured` 设为 `true` 可在首页展示项目。按需填写 `highlight` 和 `post`，后者指向已发布的站内文章，例如 `/blog/my-post/`。
- 在 `src/styles/global.css` 顶部调整明暗配色。
- 使用自定义域名时，更新 `astro.config.mjs` 的 `site` 和 `public/robots.txt`，并新增 `public/CNAME`。

## 部署

仓库名须为 `BeforeLanding.github.io`。首次推送后，在仓库 **Settings → Pages** 把 **Source** 设为 **GitHub Actions**；之后每次推送到 `main` 都会自动构建发布（见 `.github/workflows/deploy.yml`）。
