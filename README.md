# Design System Source of Truth

这个仓库用于维护一套可被 Figma 端、代码端和工具端共同消费的设计系统文档模板，并作为后续组件库文档体系的唯一数据源。

## 目标

1. 为设计侧和编码侧提供同一份事实来源
2. 将设计 token、组件详情、使用方式、代码片段拆分成职责清晰的文档
3. 避免并行维护多份组件映射、token 真相和使用说明
4. 为后续自动同步和工具解析预留稳定结构

角色约定：
- `design_side`（设计侧）：设计侧消费者
  - `figma_design_agent`（Figma设计智能体）：给虾设计 / Figma 生成流程使用
- `code_side`（编码侧）：给组件库 MCP、组件库文档站及相关代码工具使用

## 单一数据源约束

1. 本仓库是设计系统与组件库文档的唯一人工维护数据源
2. 后续组件库代码侧文档、组件库 MCP、组件库文档站都应从本仓库读取或生成
3. 下游系统不得各自维护独立的组件映射、token 真相或使用说明
4. 若代码实现与本文档不一致，应先更新本文档，再同步下游

## 当前范围

- 先维护模板和数据结构
- 当前不改造下游系统
- 当前不自动同步组件库代码或文档站
- 当前预留后续扩展需要的字段和解析规则

## 目录结构

- `rules.md`
  - 全局共享规则
  - 权威顺序
  - 下游消费契约
- `tokens.md`
  - 设计 token 真相
  - token 来源与映射模板
- `components/README.md`
  - 组件文件导航
  - 组件维护约定
- `components/_template.md`
  - 单组件详情模板
  - 包含使用场景、Figma 绑定、代码绑定、变体、代码片段、使用方式
- `src/`
  - TypeScript 解析器骨架
  - 后续用于统一读取 `rules.md`、`tokens.md`、`components/*.md`
- `package.json` / `tsconfig.json`
  - 解析器和校验器的本地工程配置

## 维护原则

1. 单一数据源
2. 一组件一文件
3. token 与组件详情分离
4. 组件导航不重复维护组件详情字段
5. 工具优先解析结构化 YAML 代码块
6. Markdown 自然语言用于补充解释，不作为唯一机读来源
7. machine id 与中文展示文案分离，机读字段优先使用稳定 id

## 预留消费方

- `design_side`（设计侧）
  - `figma_design_agent`（Figma设计智能体）
- `code_side`（编码侧）
  - 组件库 MCP
  - 组件库文档站
  - 相关代码工具

## Parser Scaffold

当前仓库已预留一层 TypeScript 解析器骨架，用于后续：

1. 统一解析 Markdown + YAML 结构化数据
2. 校验文档结构是否符合约定
3. 导出统一 JSON 给下游系统消费

当前阶段只创建文件骨架，不提前写死业务解析逻辑。

## Parser Usage

当前解析器以“编程方式调用”为主，入口文件是：

- `src/index.ts`

当前对外暴露的主要能力：

- `loadDesignSystem(options)`
  - 读取整个设计系统文档目录
  - 返回一份完整的 `DesignSystemSnapshot`
- `parseRulesDocument(filePath, rawMarkdown)`
  - 解析 `rules.md`
- `parseTokensDocument(filePath, rawMarkdown)`
  - 解析 `tokens.md`
- `parseComponentDocument(filePath, rawMarkdown)`
  - 解析单个组件文档
- `extractYamlBlocks(markdown)`
  - 从 Markdown 中提取结构化 YAML block

### Recommended Entry

推荐统一从 `loadDesignSystem()` 进入，而不是在消费端各自手工拼文件读取逻辑。

```ts
import { loadDesignSystem } from './src/index.js';

const snapshot = await loadDesignSystem({
  rootDir: '/path/to/design-system-repo'
});
```

### Output Shape

`loadDesignSystem()` 的目标输出是一份统一快照：

```ts
type DesignSystemSnapshot = {
  rootDir: string;
  rules: RulesDocument | null;
  tokens: TokensDocument | null;
  components: ComponentDocument[];
};
```

这份快照用于：

- Figma 侧读取规则、token 和组件绑定
- 代码侧读取 code binding、usage 和 snippet
- 组件库 MCP 读取结构化组件事实
- 文档站读取渲染所需字段

额外约定：
- 消费者角色和系统一律使用 machine id，例如 `design_side`、`figma_design_agent`
- 中文名称通过 `display_name` 提供给展示层
- `tokens.entries` 承载真实 token 条目
- `components[*].sections.code_snippets` 承载可机读代码片段

### Usage Principle

消费侧应遵守这些原则：

1. 优先读取统一快照，不要自己重复解析 Markdown
2. 不同消费侧只读取自己需要的 section
3. 不要在消费端写回源文档
4. 组件清单应来自 `components/*.md` 的解析结果，而不是手工维护第二份列表
5. machine id 用于 parser / schema / export，中文展示名仅用于人类阅读和渲染

### Current Status

当前解析器仍处于骨架阶段：

- 类型已定义
- 模块边界已定义
- 文件加载路径已定义
- 真实 Markdown/YAML 解析逻辑后续再完善

## Structured Data Contract

结构化 YAML 目前遵守这些约定：

1. 稳定机读字段优先使用 machine id，例如 `design_side`、`code_side`
2. 中文展示名通过 `display_name` 提供，不直接作为协议主键
3. token 的真实条目将统一记录在 `tokens.md` 的 `## Token Entries`
4. 组件示例代码若需要被工具消费，必须写入 `code_snippets[*].code`
