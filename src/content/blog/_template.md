---
title: 文章标题
description: 一句话摘要，会出现在搜索结果和 RSS 里。
pubDate: 2026-01-01
# updatedDate: 2026-01-02
tags: [标签一, 标签二]
draft: true
---

正文从这里开始。复制本文件、改掉文件名（文件名即 URL），写完后删掉 `draft: true` 即可发布。

行内公式示例 $E = mc^2$。

$$
\sum_{k=1}^{n} k = \frac{n(n+1)}{2}
$$

```mermaid
flowchart LR
  accTitle: Agent 调用链示例
  Request[用户请求] --> Agent[编程 Agent]
  Agent --> Tool[调用工具]
  Tool --> Agent
```
