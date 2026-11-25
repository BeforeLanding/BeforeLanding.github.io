// 站点级配置：改名字、简介、导航都在这里。
export const SITE = {
  title: 'BeforeLanding',
  tagline: '写在落地之前',
  description: 'Jeffery Jia 的个人网站，收录教育与实习经历、Agent 工程作品集，以及检索和评测的技术笔记。',
  author: 'Jeffery Jia',
  handle: 'BeforeLanding',
  github: 'https://github.com/BeforeLanding',
  email: '13773190710@163.com', // 填写可公开的求职邮箱后显示 Email 入口。
  lang: 'zh-CN',
} as const;

export const NAV = [
  { href: '/projects/', label: '项目' },
  { href: '/about/', label: '关于' },
  { href: '/blog/', label: '文章' },
] as const;

// 首页展示的最新文章数量
export const HOME_POST_COUNT = 5;
