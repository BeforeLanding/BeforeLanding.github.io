export interface Project {
  name: string;
  description: string;
  repo: string;
  stack: string[];
  link?: { href: string; label: string };
  featured?: boolean;
  highlight?: string;
  post?: string;
}

const gh = (name: string) => `https://github.com/BeforeLanding/${name}`;

// 描述取自各仓库的 GitHub 简介；增删项目直接改这个数组。
export const PROJECTS: Project[] = [
  {
    name: 'mini-DSH',
    description:
      '可恢复、可检查、预算受控的本地编程 Agent Harness，支持多 Agent 编排与离线评测回归。',
    repo: gh('mini-DSH'),
    stack: ['TypeScript', 'Cordis'],
    featured: true,
  },
  {
    name: 'dsh-done-check',
    description:
      '给 DeepSeek Harness 用的可执行验收清单：每个“完成”都有记录在案的检查结果，代码变了就标记待复查。',
    repo: gh('dsh-done-check'),
    stack: ['TypeScript'],
    link: { href: 'https://www.npmjs.com/package/dsh-done-check', label: 'npm' },
    featured: true,
  },
  {
    name: 'Runvori',
    description:
      '面向离席开发者的 Android 原生 Codex 客户端：在手机上看任务进度、处理审批、检查代码变更，断线后恢复任务视图。',
    repo: gh('Runvori'),
    stack: ['Android'],
    featured: true,
  },
  {
    name: 'Knoventra',
    description:
      '面向企业内网的 Agentic RAG 知识助手：多知识库混合检索、ReAct 工具调用、分层记忆管理与答案溯源。',
    repo: gh('Knoventra'),
    stack: ['Java'],
  },
  {
    name: 'SearchTune',
    description: '基于 ESCI 可验证奖励的电商商品搜索 Agent 强化学习后训练。',
    repo: gh('SearchTune'),
    stack: ['RL'],
  },
  {
    name: 'durakeep',
    description:
      '在本机运行的单用户知识库与日常助理：带引用的回答、长期偏好与提醒，基于 pi-durable 持久化执行，服务重启后能接着干。',
    repo: gh('durakeep'),
    stack: ['TypeScript', 'pi-durable'],
    featured: true,
  },
  {
    name: 'ui-testing',
    description:
      'Claude Code skill：用 Playwright 在真实浏览器里测 Web UI，并对照爬虫得到的控件与状态清单，证明测到了哪些、漏了哪些。',
    repo: gh('ui-testing'),
    stack: ['JavaScript', 'Playwright'],
  },
];
