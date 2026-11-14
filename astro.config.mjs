// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 用户主页仓库（<用户名>.github.io）部署在根路径，不需要 base。
  // 换成自定义域名时，只改这里并添加 public/CNAME。
  site: 'https://beforelanding.github.io',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
