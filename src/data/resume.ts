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
  /** 一到两句话的简介 */
  summary: string;
  stack: string[];
}

export const EDUCATION: Education[] = [
  {
    school: '新加坡国立大学',
    degree: '硕士',
    major: '人工智能',
    period: '2026.07 – 2028.08',
    details: ['相关课程：Python、Machine Learning、Agentic AI、RAG、DevSecOps'],
  },
  {
    school: '上海大学',
    degree: '学士',
    major: '数学与应用数学',
    period: '2022.09 – 2026.07',
    details: [
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
      '从零搭建面向跨国工程团队的企业知识库 Agent，让工程师能在内部平台上快速找到沉淀下来的操作经验。基于 LangGraph 编排混合检索（pgvector + Elasticsearch + Rerank）、MCP 工具调用与人工确认，支持任务中断后恢复。',
    stack: ['LangGraph', 'MCP', 'pgvector', 'Elasticsearch', 'Redis'],
  },
  {
    company: '博世',
    role: '感知算法实习生',
    period: '2024.07 – 2024.09',
    summary:
      '为感知验证场景库搭建以图搜图、以文搜图的多模态检索链路（DINOv2、CLIP、ChromaDB）。调优 HNSW 索引参数后，平均召回率提升 10% 以上、检索延迟降低 30% 以上。',
    stack: ['LangChain', 'CLIP', 'ChromaDB'],
  },
];
