// 站点级配置：改名字、简介、导航都在这里。
export const SITE = {
  title: 'BeforeLanding',
  tagline: '写在落地之前',
  description: '关于 Agent 工程、检索与评测的实践笔记。',
  author: 'Jeffery Jia',
  handle: 'BeforeLanding',
  github: 'https://github.com/BeforeLanding',
  lang: 'zh-CN',
} as const;

export const NAV = [
  { href: '/blog/', label: '文章' },
  { href: '/projects/', label: '项目' },
  { href: '/about/', label: '关于' },
] as const;

// 首页展示的最新文章数量
export const HOME_POST_COUNT = 5;
