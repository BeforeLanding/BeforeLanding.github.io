// 教育与实习经历，内容取自简历（2026-10-31 版）。更新简历后同步改这里。

export interface Education {
  school: string;
  degree: string;
  major: string;
  period: string;
  details: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: { title?: string; text: string }[];
  stack: string[];
}

export const EDUCATION: Education[] = [
  {
    school: '新加坡国立大学',
    degree: '硕士',
    major: '人工智能',
    period: '2026.07 – 2028.08',
    details: ['GPA 4.29 / 5.0', '相关课程：Python、Machine Learning、Agentic AI、RAG、DevSecOps'],
  },
  {
    school: '上海大学',
    degree: '学士',
    major: '数学与应用数学',
    period: '2022.09 – 2026.07',
    details: [
      'GPA 3.5 / 4.0',
      '美国大学生数学建模竞赛 2023、2024 Honorable Mention',
      '全国大学生数学建模竞赛 2023 全国三等奖',
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'BHS Kinetic',
    role: 'Agent 开发实习生',
    period: '2026.09 – 2027.01',
    summary:
      '资深工程师的操作经验在流失，不同国家的工程师之间经验无法共享。我从零搭建了一个基于 LangChain 的企业知识库，让工程师能通过内部平台快速找到相关知识。',
    highlights: [
      {
        title: 'Agent 运行时与业务流程',
        text: '基于 FastAPI、LangChain 与 LangGraph 构建 Agent Runtime，编排知识检索、MCP 工具调用与人工确认；通过 Checkpoint 持久化、interrupt 暂停恢复和操作幂等键，串起“查询指引—补充信息—确认建单—跟踪进度”，支持模拟 IT 工单的连续处理与重复提交防护。',
      },
      {
        title: 'RAG 混合检索链路',
        text: '针对资料分散、口语提问与制度编号难以靠单一检索匹配的问题，实现问题重写与拆分、树形意图路由和多知识库检索，结合 pgvector 向量召回、Elasticsearch 关键词检索、加权 RRF 与 Rerank 精排，配套 TTL 缓存、熔断与降级；构建覆盖 4 个部门、17 篇文档的业务知识库，加入知识有效期与业务数据一致性校验，并注册为 MCP 工具供 Agent 按需检索。',
      },
      {
        title: '分层记忆管理',
        text: '基于 Redis 与向量存储设计短期工作记忆、长期情景记忆和用户画像三层记忆，通过上下文压缩与动态拼装控制 Token 开销，支持跨轮次历史检索与用户信息复用。',
      },
    ],
    stack: ['FastAPI', 'LangChain', 'LangGraph', 'MCP', 'pgvector', 'Elasticsearch', 'Redis'],
  },
  {
    company: '博世',
    role: '感知算法实习生',
    period: '2024.07 – 2024.09',
    summary:
      '围绕感知验证场景库的检索需求，搭建基于 LangChain 的图文检索链路，让测试人员可以用图片或文字快速定位目标场景。',
    highlights: [
      {
        text: '基于 LangChain 编排 DINOv2、CLIP 与 ChromaDB 多模态检索链路，支持以图搜图和自然语言搜图，完成感知验证场景库的接入与接口联调。',
      },
      {
        text: '调优 HNSW 索引参数，平均召回率提升 10% 以上、检索延迟降低 30% 以上；结合测试反馈排查 bad case 与召回偏差，持续迭代检索效果。',
      },
    ],
    stack: ['LangChain', 'DINOv2', 'CLIP', 'ChromaDB', 'HNSW'],
  },
];
