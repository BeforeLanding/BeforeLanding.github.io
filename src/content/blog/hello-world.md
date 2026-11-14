---
title: 你好，世界
description: 博客搭好了。这是一篇占位文章，顺便检查一下排版。
pubDate: 2026-11-14
tags: [随笔]
---

博客搭好了。这是一篇**占位文章**，真正的内容随后补上；在那之前，它顺便用来检查各种排版元素是否正常。

## 为什么叫 BeforeLanding

落地之前，是最需要核对清单的时候：起落架、襟翼、速度、跑道。写东西也差不多——想法在落到代码和结论之前，值得先过一遍。

> 写作是把“我觉得我懂了”变成“我确实懂了”的过程。

## 排版检查

行内代码长这样：`pnpm dev`。代码块长这样：

```ts
interface Checklist {
  item: string;
  done: boolean;
}

const beforeLanding: Checklist[] = [
  { item: 'gear down', done: true },
  { item: 'flaps set', done: true },
  { item: 'runway in sight', done: false },
];

console.log(beforeLanding.every((c) => c.done) ? 'cleared to land' : 'go around');
```

列表：

- 无序列表第一项
- 第二项，带一个[链接](https://github.com/BeforeLanding)

表格：

| 元素 | 状态 |
| ---- | ---- |
| 标题 | 正常 |
| 代码 | 正常 |
| 表格 | 正常 |

---

就这些。下一篇见。
